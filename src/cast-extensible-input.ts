import { LitElement, html, css, customElement, property, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import '@kor-ui/kor/components/button';
import '@kor-ui/kor/components/text';
import { InputElement } from './input-element.js'

@customElement('cast-extensible-input')
export class CastExtensibleInput<T, E extends InputElement<T>> extends LitElement implements InputElement<T[]> {

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
          this.value.map(v => this.newElement(v))
        }
      </div>
    `;
  }

  private newElement(value: T): E {
    const newElement = this!.template!.cloneNode(true) as E;
    newElement.value = value;
    return newElement;
  }

  expand(): void {
    this.value = this.value.concat([this!.template!.value]);
  }

}
