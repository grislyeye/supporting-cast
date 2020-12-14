import { LitElement, html, css, customElement, query } from 'lit-element';
import { Textfield } from 'weightless/textfield';
import 'weightless/textfield';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {
  static styles = css``;

  @query('#name-field') nameField!: Textfield | null;

  render() {
    return html`
      <form id="npc-block-form">
        <h2>NPC</h2>

        <wl-textfield
          id="name-field"
          @input="${this._handleInput}"
          name="name"
          label="Name"
          outlined
        >
        </wl-textfield>
      </form>
    `;
  }

  _handleInput(): void {
    const npcUpdate = new CustomEvent('npc-update', {
      detail: {
        name: this.nameField!.value,
      },
    });

    this.dispatchEvent(npcUpdate);
  }
}
