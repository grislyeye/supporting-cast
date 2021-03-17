import { LitElement, html, customElement, query } from 'lit-element';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input';

import '@kor-ui/kor/components/textarea';
import { korTextarea } from '@kor-ui/kor/components/textarea';

import { SupportingCastCharacteristicsInput } from './supporting-cast-characteristics-input.js';
import './supporting-cast-characteristics-input.js';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {

  @query('#name-field') nameField!: korInput | null;

  @query('#description-field') descriptionField!: korTextarea | null;

  @query('#gender-field') genderField!: korInput | null;

  @query('#race-field') raceField!: korInput | null;

  @query('#statblock-field') statblockField!: korInput | null;

  @query('#alignment-field') alignmentField!: korInput | null;

  @query('#attitude-field') attitudeField!: korInput | null;

  @query('#characteristic-fields')
  characteristicFields!: SupportingCastCharacteristicsInput | null;

  render() {
    return html`
      <form id="npc-block-form">
        <kor-input
          id="name-field"
          label="Name"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <kor-textarea
          id="description-field"
          label="Description"
          rows="3"
          @input="${this._onInput}"
        >
        </kor-textarea>

        <kor-input
          id="gender-field"
          label="Gender"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <kor-input
          id="race-field"
          label="Race"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <kor-input
          id="statblock-field"
          label="Statblock"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <kor-input
          id="alignment-field"
          label="Alignment"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <kor-input
          id="attitude-field"
          label="Attitude"
          type="text"
          @input="${this._onInput}"
        >
        </kor-input>

        <supporting-cast-characteristics-input @input="${this._onInput}"
          id="characteristic-fields"
        >
        </supporting-cast-characteristics-input>

      </form>
    `;
  }

  private _onInput(): void {
    const npcUpdate = new CustomEvent('npc-update', {
      detail: {
        name: this.nameField!.value,
        description: this.descriptionField!.value,
        gender: this.genderField!.value,
        race: this.raceField!.value,
        statblock: this.statblockField!.value,
        alignment: this.alignmentField!.value,
        attitude: this.attitudeField!.value,
        characteristics: this.characteristicFields!.values
      },
    });

    this.dispatchEvent(npcUpdate);
  }

}
