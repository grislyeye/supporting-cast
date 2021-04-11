import { LitElement, html, customElement, query, property } from 'lit-element';
import { PerchanceElement } from './perchance-mixin.js';
import { until } from 'lit-html/directives/until';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input/kor-input';

@customElement('dice-random-input')
export class DiceRandomInput extends PerchanceElement(LitElement) {
  @property() label: string | undefined = undefined;

  @query('#input') inputField!: korInput | null;

  get value(): string {
    return this.inputField ? this.inputField!.value : undefined;
  }

  set value(value: string) {
    this.inputField!.value = value;
  }

  render() {
    return html`
      <kor-input id="input" label="${this.label}" type="text"></kor-input>
    `;
  }

}
