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
