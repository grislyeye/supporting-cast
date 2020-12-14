import {
  LitElement,
  html,
  css,
  customElement,
  property,
  query,
} from 'lit-element';
import 'weightless/divider';
import 'weightless/nav';

import { SupportingCastNpcForm } from './supporting-cast-npc-form.js';

import { SupportingCastNpcView } from './supporting-cast-npc-view.js';

@customElement('supporting-cast-app')
export class SupportingCastApp extends LitElement {
  @property({ type: String }) title = 'Supporting Cast';

  @query('#form') form!: SupportingCastNpcForm | null;

  @query('#npc-view') npcView!: SupportingCastNpcView | null;

  static styles = css`
    :host {
      color: #1a2b42;
    }

    #app {
      display: flex;
      flex-direction: column;

      background: white;
    }

    #app #nav wl-nav {
      --nav-bg: #24292e;
      color: #ffffff;
    }

    #app #view {
      display: flex;
      padding: 5px;
    }

    #app #view > * {
      margin: 5px;
      min-height: 100vh;
    }
  `;

  firstUpdated(): void {
    const handler = this.npcView!.handleEvents.bind(this.npcView);
    this.form!.addEventListener('npc-update', handler);
  }

  render() {
    return html`
      <main id="app">
        <div id="nav">
          <wl-nav>
            <h1 id="title" slot="title">${this.title}</h1>
          </wl-nav>
        </div>

        <div id="view">
          <supporting-cast-npc-form id="form"> </supporting-cast-npc-form>

          <wl-divider vertical></wl-divider>

          <supporting-cast-npc-view id="npc-view"> </supporting-cast-npc-view>
        </div>
      </main>
    `;
  }
}
