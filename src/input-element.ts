import { LitElement } from 'lit-element';

export abstract class InputElement<T> extends LitElement {

  abstract value: T

  cloneWithValue(value: T): InputElement<T> {
    const newElement = this!.cloneNode(true) as InputElement<T>;
    newElement.value = value;
    return newElement;
  }

}
