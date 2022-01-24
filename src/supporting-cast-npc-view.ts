import { LitElement, html, customElement, property, query } from 'lit-element';
import 'vellum-monster/dist/vellum-npc';
import { NonPlayerCharacter } from 'vellum-monster/dist/vellum-npc';
import '@kor-ui/kor/components/button';
import html2canvas from 'html2canvas';

type Name = string;
type Description = string;
type Stat = [Name, Description];

@customElement('supporting-cast-npc-view')
export class SupportingCastNpcView extends LitElement {
  @query('#npc-block') npcBlock!: NonPlayerCharacter | null;

  @query('#custom-sections') customSectionsContainer!: HTMLElement | null;

  @property({ type: Array }) customSections: Array<Stat> | undefined;

  render() {
    return html`
      <vellum-npc id="npc-block">
        <div id="custom-sections">
          ${this.renderSections()}
        </div>
      </vellum-npc>

      <kor-button
        id="download"
        label="Download"
        color="Primary"
        @click="${this.download}"
      ></kor-button>
    `;
  }

  renderSections() {
    if(this.customSections) {
      return this.customSections.map(stat =>
        stat[0] !== undefined && stat[1] !== undefined
          ? this.renderStat(stat[0], stat[1])
          : html``
      )
    }
  }

  renderStat(name: string, description: string) {
    return html`
      <vellum-stat class="trait" name="${name}."> ${description} </vellum-stat>
    `;
  }

  handleEvents(event: Event): void {
    const detail = (event as CustomEvent).detail;

    this.npcBlock!.name = detail.name;
    this.npcBlock!.description = detail.description;
    this.npcBlock!.pronouns = detail.pronouns;
    this.npcBlock!.race = detail.race;
    this.npcBlock!.statblock = detail.statblock;
    this.npcBlock!.alignment = detail.alignment;
    this.npcBlock!.attitude = detail.attitude;
    this.customSections = detail.characteristics;
  }

  download() {
    html2canvas(this.npcBlock!).then(
      (canvas) => {
        const link = document.createElement('a')

        if (typeof link.download === 'string') {
          link.href = canvas.toDataURL()
          link.download = 'npc-block.png';

          //Firefox requires the link to be in the body
          document.body.appendChild(link)

          //simulate click
          link.click()

          //remove the link when done
          document.body.removeChild(link)
        }
      }
    )

  }

}
