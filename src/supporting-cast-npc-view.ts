import { LitElement, html, customElement, property, query } from 'lit-element';
import 'vellum-monster/dist/vellum-npc';
import { NonPlayerCharacter } from 'vellum-monster/dist/vellum-npc';

type Name = string;
type Description = string;
type Stat = [Name, Description];

@customElement('supporting-cast-npc-view')
export class SupportingCastNpcView extends LitElement {

  @query('#npc-block') npcBlock!: NonPlayerCharacter | null;

  @query('#custom-sections') customSectionsContainer!: HTMLElement | null;

  @property({ type: Array }) customSections: Array<Stat> = [];

  render() {
    return html` <vellum-npc id="npc-block">
      <div id="custom-sections">
        ${this.customSections.map(trait =>
          trait[0] !== undefined && trait[1] !== undefined ?
          this.renderTrait(trait[0], trait[1]) :
          html``
        )}
      </div>
    </vellum-npc>`;
  }

  renderTrait(name: string, description: string) {
    return html`
      <vellum-stat class="trait" name="${name}."> ${description} </vellum-stat>
    `;
  }

  handleEvents(event: Event): void {
    const detail = (event as CustomEvent).detail;

    // TODO these should be members
    this.npcBlock!.name = detail.name;
    this.npcBlock!.description = detail.description;
    this.npcBlock!.gender = detail.gender;
    this.npcBlock!.race = detail.race;
    this.npcBlock!.statblock = detail.statblock;
    this.npcBlock!.alignment = detail.alignment;
    this.npcBlock!.attitude = detail.attitude;
    this.customSections = detail.characteristics
  }

}
