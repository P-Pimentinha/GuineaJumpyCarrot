import Token from './Token.js';

class TokenEngine {
  constructor() {
    this.tokens = [new Token(200, 700)];
  }

  draw(ctx) {
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      const element = this.tokens[i];
      if (element.delete) {
        this.tokens.splice(i, 1);
        break;
      }
      element.update(ctx);
    }
  }
}

export default TokenEngine;
