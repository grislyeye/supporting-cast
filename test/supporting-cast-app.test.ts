import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import { Textfield } from 'weightless/textfield';

import { SupportingCastApp } from '../src/supporting-cast-app.js';
import '../src/supporting-cast-app.js';

import { SupportingCastNpcForm } from '../src/supporting-cast-npc-form.js';
import { SupportingCastNpcView } from '../src/supporting-cast-npc-view.js';

import 'vellum-monster/vellum-npc'

describe('<supporting-cast-app>', () => {
  describe('should', () => {
    it('update NPC block name from form.', async () => {
      const app: SupportingCastApp = await fixture(html`
        <supporting-cast-app></supporting-cast-app>
      `);

      app.form!.nameField!.value = "NPC Name"
      app.form!.nameField!.dispatchEvent(new CustomEvent("input"))

      expect(app.npcView!.npcBlock!.getAttribute("name")).to.equal("NPC Name")
    });
  });
});
