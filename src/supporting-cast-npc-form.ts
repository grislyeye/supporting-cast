import { LitElement, html, customElement, query } from 'lit-element';

import "./dice/dice-random-input"
import { DiceRandomInput } from "./dice/dice-random-input"

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input/kor-input';

import '@kor-ui/kor/components/textarea';
import { korTextarea } from '@kor-ui/kor/components/textarea';

import './cast-stats-input.js';
import { CastStatsInput } from './cast-stats-input.js';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {

  @query('#name-field') nameField!: DiceRandomInput | null;

  @query('#description-field') descriptionField!: korTextarea | null;

  @query('#gender-field') genderField!: korInput | null;

  @query('#race-field') raceField!: korInput | null;

  @query('#statblock-field') statblockField!: korInput | null;

  @query('#alignment-field') alignmentField!: korInput | null;

  @query('#attitude-field') attitudeField!: korInput | null;

  @query('#characteristic-fields')
  characteristicFields!: CastStatsInput | null;

  render() {
    return html`
      <form id="npc-block-form">
        <dice-random-input
          id="name-field"
          label="Name"
          type="text"
          roller="https://intense-reef-78550.herokuapp.com/grislyeye/lofacharacters/rolls"
          @input="${this._onInput}"
        >
        </dice-random-input>

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

        <cast-stats-input
          id="characteristic-fields"
          label="Characteristics"
          @input="${this._onInput}"
        >
        </cast-stats-input>

      </form>
    `;
  }

  async connectedCallback() {
    super.connectedCallback()
    await this.updateComplete
    this._onInput()
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
