import { LitElement, html, css, customElement, property, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@kor-ui/kor/components/button';
import '@kor-ui/kor/components/text';
import { InputElement } from './input-element.js'

@customElement('cast-extensible-input')
export class CastExtensibleInput<T, E extends InputElement<T>> extends InputElement<T[]> {

  @property({ type: String }) label = '';

  @property({ type: Array }) value: T[] = [];

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
        ${
          this.value.map(v => this!.template!.cloneWithValue(v))
        }
      </div>
    `;
  }

  expand(): void {
    this.value = this.value.concat([this!.template!.value]);
  }

}
