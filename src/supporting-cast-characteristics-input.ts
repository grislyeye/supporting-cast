import { LitElement, html, css, customElement, property, query, queryAll } from 'lit-element';
import '@kor-ui/kor/components/text';
import '@kor-ui/kor/components/icon';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input';

import '@kor-ui/kor/components/button';
import { korButton } from '@kor-ui/kor/components/button';

@customElement('supporting-cast-characteristics-input')
export class SupportingCastCharacteristicsInput extends LitElement {

  @property() rows: number = 1

  @queryAll(".name-field") nameFields!: korInput[]

  @queryAll(".description-field") descriptionFields!: korInput[]

  get values(): [string, string][] {
    if (this.nameFields !== undefined && this.descriptionFields !== undefined) {
      const names: string[] = Array.from(this.nameFields).map(f => f.value)
      const descriptions: string[] = Array.from(this.descriptionFields).map(f => f.value)

      return names.map((n, i) => [n, descriptions[i]])
    } else return []
  }

  static styles = css`
    #expand {
      font-size: 2em;
    }
  `;

  render() {
    return html`
      <header>
        <kor-text size="header-2">Characteristics</kor-text>

        <kor-button
          id="expand"
          label="Expand"
          icon="library_add"
          color="Primary"
          @click="${this.expand}"
        ></kor-button>
      </header>

      ${[...Array(this.rows).keys()].map(this.renderRow)}
    `
  }

  renderRow() {
    return html`
      <kor-input
        class="name-field"
        label="Name"
        type="text"
      >
      </kor-input>

      <kor-input
        class="description-field"
        label="Description"
        type="text"
      >
      </kor-input>
    `
  }

  expand() : void {
    this.rows = this.rows + 1
  }

}
