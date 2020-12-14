import { LitElement, html, css, customElement, query } from 'lit-element';
import { Textfield } from 'weightless/textfield';
import 'weightless/textfield';

@customElement('supporting-cast-npc-form')
export class SupportingCastNpcForm extends LitElement {
  static styles = css``;

  @query('#name-field') nameField!: Textfield | null;

  @query('#description-field') descriptionField!: Textfield | null;

  @query('#gender-field') genderField!: Textfield | null;

  render() {
    return html`
      <form id="npc-block-form">
        <h2>NPC</h2>

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
      </form>
    `;
  }

  _onInput(): void {
    const npcUpdate = new CustomEvent('npc-update', {
      detail: {
        name: this.nameField!.value,
        description: this.descriptionField!.value,
        gender: this.genderField!.value,
      },
    });

    this.dispatchEvent(npcUpdate);
  }
}
