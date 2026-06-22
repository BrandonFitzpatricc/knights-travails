// The purpose of this object is to save each position with the path used to reach it,
// as this will be necessary for returning the shortest path once it has been discovered.
class Position {
  #value;
  #path;

  constructor(value, path) {
    this.#value = value;
    this.#path = path;
  }

  get value() {
    return this.#value;
  }

  get path() {
    return this.#path;
  }

  set path(value) {
    this.#path = value;
  }
}

export { Position };
