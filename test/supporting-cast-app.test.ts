import { html, fixture, expect, elementUpdated, aTimeout } from '@open-wc/testing';

import { SupportingCastApp } from '../src/supporting-cast-app.js';
import '../src/supporting-cast-app.js';

describe('<supporting-cast-app>', async () => {
  const appFixture: () => Promise<SupportingCastApp> = async () =>
    await fixture(html` <supporting-cast-app></supporting-cast-app> `);

  describe('should', () => {
    it('update NPC block name from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.nameField!.value = 'NPC Name';
      app.form!.nameField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.name).to.equal('NPC Name');
    });

    it('update NPC block description from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.descriptionField!.value = 'NPC description';
      app.form!.descriptionField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.description).to.equal('NPC description');
    });

    it('update NPC block pronouns from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.pronounsField!.value = 'they/them';
      app.form!.pronounsField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.pronouns).to.equal('they/them');
    });

    it('update NPC block race from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.raceField!.value = 'NPC race';
      app.form!.raceField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.race).to.equal('NPC race');
    });

    it('update NPC block statblock from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.statblockField!.value = 'goblin';
      app.form!.statblockField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.statblock).to.equal('goblin');
    });

    it('update NPC block alignment from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.alignmentField!.value = 'neutral useless';
      app.form!.alignmentField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.alignment).to.equal('neutral useless');
    });

    it('update NPC block attitude from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.attitudeField!.value = 'indifferent';
      app.form!.attitudeField!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.npcBlock!.attitude).to.equal('indifferent');
    });

    it('update NPC characteristic from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.characteristicFields!.nameFields[0]!.value = 'Angry (Neutral)';
      app.form!.characteristicFields!.descriptionFields[0]!.value =
        "Why won't this fury stop?";
      app.form!.characteristicFields!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.customSections).to.deep.equal([
        ['Angry (Neutral)', "Why won't this fury stop?"],
      ]);
    });

    it('add NPC characteristic from form.', async () => {
      const app: SupportingCastApp = await appFixture();

      app.form!.characteristicFields!.nameFields[0]!.value = 'Angry (Neutral)';
      app.form!.characteristicFields!.descriptionFields[0]!.value =
        "Why won't this fury stop?";
      app.form!.characteristicFields!.dispatchEvent(new CustomEvent('input'));

      app.form!.characteristicFields!.expand();
      await elementUpdated(app.form!.characteristicFields!);

      app.form!.characteristicFields!.nameFields[1]!.value = 'Happy (Good)';
      app.form!.characteristicFields!.descriptionFields[1]!.value =
        'Big smiles everyone!';
      app.form!.characteristicFields!.dispatchEvent(new CustomEvent('input'));

      expect(app.npcView!.customSections).to.deep.equal([
        ['Angry (Neutral)', "Why won't this fury stop?"],
        ['Happy (Good)', 'Big smiles everyone!'],
      ]);
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC block name with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.name).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC description with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.description).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC race with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.race).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC statblock with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.statblock).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC alignment with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.alignment).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC attitude with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.attitude).to.not.be.empty;
    });

    // Quarantined
    // TODO test has external dependency
    xit('initialise NPC pronouns with random value.', async () => {
      const app: SupportingCastApp = await appFixture();

      // TODO Get rid of timout
      await aTimeout(1000);

      expect(app.npcView!.npcBlock!.pronouns).to.not.be.empty;
    });
  });
});
