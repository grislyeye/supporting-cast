import { LitElement, html, customElement, query, property } from 'lit-element';
import { PerchanceElement } from './perchance-mixin.js';
import { until } from 'lit-html/directives/until';

import '@kor-ui/kor/components/textarea';
import { korTextarea } from '@kor-ui/kor/components/textarea/kor-textarea';

@customElement('dice-random-textarea')
export class DiceRandomTextarea extends PerchanceElement(LitElement) {

  @property() label: string | undefined = undefined;

  @property() rows: number | undefined = undefined;

  @query('#textarea') textareaField!: korTextarea | null;

  get value(): string {
    return this.textareaField ? this.textareaField!.value : undefined;
  }

  set value(value: string) {
    this.textareaField!.value = value;
  }

  render() {
    return html`
      <kor-textarea
        id="textarea"
        label="${this.label}"
        rows="${this.rows}"
      ></kor-textarea>
    `;
  }

}
