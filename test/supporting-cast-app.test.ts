import { html, fixture, expect } from '@open-wc/testing';

import { SupportingCastApp } from '../src/supporting-cast-app.js';

import 'vellum-monster/vellum-npc';

describe('<supporting-cast-app>', () => {
  describe('should', () => {
    it('update NPC block name from form.', async () => {
      const app: SupportingCastApp = await fixture(html`
        <supporting-cast-app></supporting-cast-app>
      `);

      app.form!.nameField!.value = 'NPC Name';
      app.form!.nameField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('name')).to.equal('NPC Name');
    });
  });
});
