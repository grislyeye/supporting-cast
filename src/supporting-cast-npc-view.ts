import { LitElement, html, css, customElement, query } from 'lit-element';
import 'vellum-monster/vellum-npc';

@customElement('supporting-cast-npc-view')
export class SupportingCastNpcView extends LitElement {
  static styles = css``;

  @query('#npc-block') npcBlock!: LitElement | null;

  render() {
    return html` <vellum-npc id="npc-block"> </vellum-npc> `;
  }

  handleEvents(event: Event): void {
    const detail = (event as CustomEvent).detail;
    this.npcBlock!.setAttribute('name', detail.name);
    this.npcBlock!.setAttribute('description', detail.description);
    this.npcBlock!.setAttribute('gender', detail.gender);
    this.npcBlock!.setAttribute('race', detail.race);
    this.npcBlock!.setAttribute('statblock', detail.statblock);
    this.npcBlock!.setAttribute('alignment', detail.alignment);
  }
}
