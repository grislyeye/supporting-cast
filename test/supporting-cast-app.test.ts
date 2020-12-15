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
    it('update NPC block gender from form.', async () => {
      app.form!.genderField!.value = 'NPC gender';
      app.form!.genderField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('gender')).to.equal(
        'NPC gender'
      );
    });
    it('update NPC block race from form.', async () => {
      app.form!.raceField!.value = 'NPC race';
      app.form!.raceField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('race')).to.equal('NPC race');
    });
    it('update NPC block statblock from form.', async () => {
      app.form!.statblockField!.value = 'goblin';
      app.form!.statblockField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('statblock')).to.equal(
        'goblin'
      );
    });
    it('update NPC block alignment from form.', async () => {
      app.form!.alignmentField!.value = 'neutral useless';
      app.form!.alignmentField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.getAttribute('alignment')).to.equal(
        'neutral useless'
      );
    });
  });
});
