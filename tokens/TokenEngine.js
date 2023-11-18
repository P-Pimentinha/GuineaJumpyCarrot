import Token from './Token.js';

class TokenEngine {
  constructor() {
    this.tokens = [new Token(200, 700)];
    this.frameTimer = 0;
    this.frameInterval = 5 * 1000;
  }

  draw(ctx, deltaTime) {
    const positionX = Math.floor(Math.random() * (900 - 150 + 1)) + 150;
    const positionY = Math.floor(Math.random() * (750 - 150 + 1)) + 150;

    for (let i = this.tokens.length - 1; i >= 0; i--) {
      const element = this.tokens[i];
      if (element.delete) {
        this.tokens.splice(i, 1);
        break;
      }
      element.update(ctx);
    }

    if (this.tokens.length >= 4) {
      this.frameTimer = 0;
    } else if (this.frameTimer > this.frameInterval) {
      this.tokens.push(new Token(positionX, positionY));
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
}

export default TokenEngine;
