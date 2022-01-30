import { html, css, customElement, property, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@kor-ui/kor/components/button';
import '@kor-ui/kor/components/text';
import { InputLitElement } from './input-lit-element.js'

@customElement('cast-extensible-input')
export class CastExtensibleInput<T, E extends InputLitElement<T>>
  extends InputLitElement<T[]> {

  @property({ type: String }) label = '';

  @property({ type: Array }) value: T[] | undefined;

  @property({ type: Number }) rows = 1;

  @query('#container') private container!: HTMLElement | null;

  private template: E | null = this!.firstElementChild as E | null;

  render() {
    return html`
      <header>
        <kor-text size="header-2">${this.label}</kor-text>

        <kor-button
          id="expand"
          label="Expand"
          color="Primary"
          @click="${this.expand}"
        ></kor-button>
      </header>

      <div id="container">
        ${this.renderElements()}
      </div>
    `;
  }

  renderElements(): InputLitElement<T>[] {
    if(this.value) {
      return this.value.map(v => this.template!.cloneWithValue(v))
    } else {
      return Array(this.rows).fill(this.template!.clone())
    }
  }

  expand(): void {
    if (this.value) {
      this.value = this.value.concat([this.template!.value!]);
    } else {
      this.value = [this.template!.value!]
    }
  }

}
