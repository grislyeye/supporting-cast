import { LitElement, property } from 'lit-element';

type Constructor<T> = new (...args: any[]) => T;

export function roll(generatorId: string | undefined): Promise<string> {
  const uri = `https://six-perfect-glazer.glitch.me/api?generator=${generatorId}&list=output`
  return fetch(uri, { method: 'GET' })
    .then(response => response.text());
}

export function PerchanceElement<T extends Constructor<LitElement>>(base: T) {

  abstract class PerchanceElementMixin extends base {

    @property() generatorId: string | undefined = undefined;

    abstract get value(): string

    abstract set value(value: string)

    async roll(): Promise<string> {
      return roll(this.generatorId);
    }

    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;

      this.value = await roll(this!.generatorId);

      const inputEvent = new CustomEvent('input', {
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(inputEvent);
    }

  }

  return PerchanceElementMixin;

}
