import { LitElement, html, customElement, query, property } from 'lit-element';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input/kor-input';

@customElement('dice-random-input')
export class DiceRandomInput extends LitElement {

  @property() label: string | undefined = undefined

  @property({ type: Array }) table: string[] = []

  @query('#input') inputField!: korInput | null;

  render() {
    return html`
      <kor-input
        id="input"
        label="${this.label}"
        type="text"
        value="${this.value !== undefined ? this.value : this.roll}"
      ></kor-input>
    `
  }

  get value(): string {
    return this.inputField ? this.inputField!.value : undefined
  }

  set value(value: string) {
    this.inputField!.value = value
  }

  get roll(): string {
    return this.table[Math.floor(Math.random() * this.table.length)]
  }

}

