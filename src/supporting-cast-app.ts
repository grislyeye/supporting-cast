import {
  LitElement,
  html,
  css,
  customElement,
  query,
  TemplateResult,
} from 'lit-element';
import '@kor-ui/kor/components/app-bar';
import '@kor-ui/kor/components/card';
import '@kor-ui/kor/components/grid';
import '@kor-ui/kor/components/page';

import { SupportingCastNpcForm } from './supporting-cast-npc-form.js';
import './supporting-cast-npc-form.js';

import { SupportingCastNpcView } from './supporting-cast-npc-view.js';
import './supporting-cast-npc-view.js';

@customElement('supporting-cast-app')
export class SupportingCastApp extends LitElement {
  @query('#form') form!: SupportingCastNpcForm | null;

  @query('#npc-view') npcView!: SupportingCastNpcView | null;

  static styles = css`
    :host {
      display: block;
      min-width: 100vw;
      min-height: 100vh;
    }

    nav {
      font-size: 1.5em;
      font-weight: bold;
      color: #ffffff;
      background: #24292e;
    }
  `;

  firstUpdated(): void {
    const handler = this.npcView!.handleEvents.bind(this.npcView);
    this.form!.addEventListener('npc-update', handler);
  }

  render(): TemplateResult {
    return html`
      <kor-page id="app" theme="light">
        <nav slot="top">
          <kor-app-bar label="Supporting Cast"></kor-app-bar>
        </nav>

        <kor-grid id="view">
          <kor-card label="NPC" grid-cols="6">
            <supporting-cast-npc-form id="form"> </supporting-cast-npc-form>
          </kor-card>

          <kor-card label="Statblock" grid-cols="6">
            <supporting-cast-npc-view id="npc-view"> </supporting-cast-npc-view>
          </kor-card>
        </kor-grid>
      </kor-page>
    `;
  }
}
