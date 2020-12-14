import { html, fixture, expect } from '@open-wc/testing';

import { SupportingCastApp } from '../src/supporting-cast-app.js';
import '../src/supporting-cast-app.js';

describe('<supporting-cast-app>', async () => {
  const app: SupportingCastApp = await fixture(html`
    <supporting-cast-app></supporting-cast-app>
  `);

  describe('should', () => {
    it('update NPC block name from form.', async () => {
      app.form!.nameField!.value = 'NPC Name';
      app.form!.nameField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('name')).to.equal('NPC Name');
    });

    it('update NPC block description from form.', async () => {
      app.form!.descriptionField!.value = 'NPC description';
      app.form!.descriptionField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('description')).to.equal(
        'NPC description'
      );
    });
  });
});
