import { LitElement, html, css, customElement, property, query } from 'lit-element';
import 'vellum-monster/vellum-npc'

let modified = false

@customElement('supporting-cast-npc-view')
export class SupportingCastNpcView extends LitElement {

  static styles = css``;

  @query('#npc-block') npcBlock!: LitElement | null;

  render() {
    return html`
      <vellum-npc id="npc-block">
      </vellum-npc>
     `;
  }

  get modified() {
    return modified
  }

  handleEvents(event: Event) {
    modified = true
    const detail = (event as CustomEvent).detail
    this.npcBlock!.setAttribute("name", detail.name)
  }

}
