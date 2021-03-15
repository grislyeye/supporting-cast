import { LitElement, html, customElement, property, query } from 'lit-element';
import 'vellum-monster/vellum-npc';

type Name = string;
type Description = string;
type Stat = [Name, Description];

@customElement('supporting-cast-npc-view')
export class SupportingCastNpcView extends LitElement {
  @query('#npc-block') npcBlock!: LitElement | null;

  @query('#custom-sections') customSectionsContainer!: HTMLElement | null;

  @property({ type: Array }) customSections: Array<Stat> = [];

  render() {
    return html` <vellum-npc id="npc-block">
      <div id="custom-sections">
        ${this.customSections.map(trait =>
          this.renderTrait(trait[0], trait[1])
        )}
      </div>
    </vellum-npc>`;
  }

  renderTrait(name: string, description: string) {
    return html`
      <vellum-stat class="trait" name="${name}"> ${description} </vellum-stat>
    `;
  }

  handleEvents(event: Event): void {
    const detail = (event as CustomEvent).detail;

    // TODO these should be members
    this.npcBlock!.setAttribute('name', detail.name);
    this.npcBlock!.setAttribute('description', detail.description);
    this.npcBlock!.setAttribute('gender', detail.gender);
    this.npcBlock!.setAttribute('race', detail.race);
    this.npcBlock!.setAttribute('statblock', detail.statblock);
    this.npcBlock!.setAttribute('alignment', detail.alignment);
    this.npcBlock!.setAttribute('attitude', detail.attitude);

    const characteristics: Array<Stat> = [
      [detail.characteristics[0].name, detail.characteristics[0].description],
    ];

    this.customSections = characteristics;
  }
}
