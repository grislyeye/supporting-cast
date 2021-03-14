import { LitElement, html, css, customElement, query } from 'lit-element';
import { Textfield } from 'weightless/textfield';

import 'weightless/title';
import 'weightless/divider';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {
  static styles = css`
    wl-textfield {
      padding-bottom: 1ex;
    }
  `;

  @query('#name-field') nameField!: Textfield | null;

  @query('#description-field') descriptionField!: Textfield | null;

  @query('#gender-field') genderField!: Textfield | null;

  @query('#race-field') raceField!: Textfield | null;

  @query('#statblock-field') statblockField!: Textfield | null;

  @query('#alignment-field') alignmentField!: Textfield | null;

  @query('#attitude-field') attitudeField!: Textfield | null;

  @query('#characteristic-name-field')
  characteristicNameField!: Textfield | null;

  @query('#characteristic-description-field')
  characteristicDescriptionField!: Textfield | null;

  render() {
    return html`
      <form id="npc-block-form">
        <wl-title level="2">NPC</wl-title>

        <wl-textfield
          id="name-field"
          @input="${this._onInput}"
          name="name"
          label="Name"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="description-field"
          @input="${this._onInput}"
          name="description"
          label="Description"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="gender-field"
          @input="${this._onInput}"
          name="gender"
          label="Gender"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="race-field"
          @input="${this._onInput}"
          name="race"
          label="Race"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="statblock-field"
          @input="${this._onInput}"
          name="statblock"
          label="Statblock"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="alignment-field"
          @input="${this._onInput}"
          name="alignment"
          label="Alignment"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="attitude-field"
          @input="${this._onInput}"
          name="attitude"
          label="Attitude"
          outlined
        >
        </wl-textfield>

        <wl-divider></wl-divider>

        <wl-title level="3">Characteristics</wl-title>

        <wl-textfield
          id="characteristic-name-field"
          @input="${this._onInput}"
          name="characteristic-name"
          label="Name"
          outlined
        >
        </wl-textfield>

        <wl-textfield
          id="characteristic-description-field"
          @input="${this._onInput}"
          name="characteristic-description"
          label="Description"
          outlined
        >
        </wl-textfield>
      </form>
    `;
  }

  _onInput(): void {
    const npcUpdate = new CustomEvent('npc-update', {
      detail: {
        name: this.nameField!.value,
        description: this.descriptionField!.value,
        gender: this.genderField!.value,
        race: this.raceField!.value,
        statblock: this.statblockField!.value,
        alignment: this.alignmentField!.value,
        attitude: this.attitudeField!.value,
        characteristics: [
          {
            name: this.characteristicNameField!.value,
            description: this.characteristicDescriptionField!.value,
          },
        ],
      },
    });

    this.dispatchEvent(npcUpdate);
  }
}
