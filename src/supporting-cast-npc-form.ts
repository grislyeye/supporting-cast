import { LitElement, html, customElement, query } from 'lit-element';
import { roll } from './dice/perchance-mixin.js';

import './dice/dice-random-input.js';
import { DiceRandomInput } from './dice/dice-random-input.js';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input/kor-input';

import './dice/dice-random-textarea.js';
import { DiceRandomTextarea } from './dice/dice-random-textarea.js';

import './cast-stats-input.js';
import { CastStatsInput } from './cast-stats-input.js';

import './cast-extensible-input.js';
import { CastExtensibleInput } from './cast-extensible-input.js';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {
  @query('#name-field') nameField!: DiceRandomInput | null;

  @query('#description-field') descriptionField!: DiceRandomTextarea | null;

  @query('#pronouns-field') pronounsField!: korInput | null;

  @query('#race-field') raceField!: korInput | null;

  @query('#statblock-field') statblockField!: korInput | null;

  @query('#alignment-field') alignmentField!: korInput | null;

  @query('#attitude-field') attitudeField!: korInput | null;

  @query('#characteristic-fields')
  characteristicFields!: CastExtensibleInput<[string, string], CastStatsInput> | null;

  render() {
    return html`
      <form id="npc-block-form">
        <dice-random-input
          id="name-field"
          label="Name"
          type="text"
          generatorId="lzoje20270"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <dice-random-textarea
          id="description-field"
          label="Description"
          rows="3"
          generatorId="c116qpybdx"
          @input="${this.updateView}"
        >
        </dice-random-textarea>

        <dice-random-input
          id="pronouns-field"
          label="Pronouns"
          type="text"
          generatorId="oghisbk72o"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <dice-random-input
          id="race-field"
          label="Race"
          type="text"
          generatorId="57igfcmvsu"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <dice-random-input
          id="statblock-field"
          label="Statblock"
          type="text"
          generatorId="8psinz72ej"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <dice-random-input
          id="alignment-field"
          label="Alignment"
          type="text"
          generatorId="460txf1ubz"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <dice-random-input
          id="attitude-field"
          label="Attitude"
          type="text"
          generatorId="fyr5cchgjd"
          @input="${this.updateView}"
        >
        </dice-random-input>

        <cast-extensible-input
          id="characteristic-fields"
          label="Characteristics"
          @input="${this.updateView}"
        >
          <cast-stats-input>
          </cast-stats-input>
        </cast-extensible-input>
      </form>
    `;
  }

  firstUpdated() {
    this!.characteristicFields!.value = [['blah', 'blah']]
  }

  private updateView(e: any): void {
    const npcUpdate = new CustomEvent('npc-update', {
      detail: {
        name: this.nameField!.value,
        description: this.descriptionField!.value,
        pronouns: this.pronounsField!.value,
        race: this.raceField!.value,
        statblock: this.statblockField!.value,
        alignment: this.alignmentField!.value,
        attitude: this.attitudeField!.value,
        characteristics: this.characteristicFields!.value,
      },
    });

    this.dispatchEvent(npcUpdate);
  }
}
