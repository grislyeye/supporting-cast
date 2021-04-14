import {
  html,
  customElement,
  property,
  query
} from 'lit-element';
import { InputElement } from './input-element.js'

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input';

@customElement('cast-stats-input')
export class CastStatsInput extends InputElement<[string, string]> {

  @property() label: string | undefined = undefined;

  @property() rows = 1;

  @query('#name-field') nameField!: korInput;

  @query('#description-field') descriptionField!: korInput;

  @property() value: [string, string] = ['', '']

  render() {
    return html`
      <kor-input id="name-field" label="Name" type="text" value="${this.value[0]}"></kor-input>

      <kor-input id="description-field" label="Description" type="text" value="${this.value[1]}">
      </kor-input>
    `;
  }

}
