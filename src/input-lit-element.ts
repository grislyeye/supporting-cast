import { LitElement } from 'lit-element';

export abstract class InputLitElement<T> extends LitElement {

  abstract value: T | undefined

  clone(): InputLitElement<T> {
    return this!.cloneNode(true) as InputLitElement<T>;
  }

  cloneWithValue(value: T): InputLitElement<T> {
    const newElement = this.clone();
    newElement.value = value;
    return newElement;
  }

}
