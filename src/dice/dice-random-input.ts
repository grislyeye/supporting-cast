import { LitElement, html, customElement, query, property } from 'lit-element';
import { until } from 'lit-html/directives/until';

import '@kor-ui/kor/components/input';
import { korInput } from '@kor-ui/kor/components/input/kor-input';

@customElement('dice-random-input')
export class DiceRandomInput extends LitElement {

  @property() label: string | undefined = undefined

  @property() roller: string | undefined = undefined

  @query('#input') inputField!: korInput | null;

  render() {
    return html`
      <kor-input
        id="input"
        label="${this.label}"
        type="text"
        value="${until(this.roll())}"
      ></kor-input>
    `
  }

  get value(): string {
    return this.inputField ? this.inputField!.value : undefined
  }

  set value(value: string) {
    this.inputField!.value = value
  }

  private async roll(): Promise<string> {
    return fetch(this.roller!, { method: 'POST' })
      .then(response => response.text())
      .then(result => { console.log(result); return result; })
      .then(body => this.parseMessage(body))
  }

  private parseMessage(html: string): string {
    const message = document.createElement('div')!
    message.innerHTML = html

    return message
      .querySelector('deckard-message')!
      .querySelector('p')!
      .textContent!
  }

}

