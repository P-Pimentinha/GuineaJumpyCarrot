import Token from './Token.js';

class TokenEngine {
  constructor(gameHeight) {
    this.gameHeight = gameHeight;
    this.tokens = [new Token(200, 700, this.gameHeight)];
    this.frameTimer = 0;
    this.frameInterval = 1 * 1000;
  }

  draw(ctx, deltaTime) {
    this.updateToken(ctx, deltaTime);
    this.generateNewToken(deltaTime);
  }

  updateToken(ctx, deltaTime) {
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      const element = this.tokens[i];
      if (element.delete) {
        this.tokens.splice(i, 1);
      }
      element.update(ctx, deltaTime);
    }
  }

  generateNewToken(deltaTime) {
    const positionX = {
      1: Math.floor(Math.random() * (380 - 150 + 1)) + 150,
      2: Math.floor(Math.random() * (790 - 600 + 1)) + 600,
    };
    let randomPositionX = Math.floor(Math.random() * 2) + 1;
    const positionY = -3;

    if (this.tokens.length >= 4) {
      this.frameTimer = 0;
    } else if (this.frameTimer > this.frameInterval) {
      this.tokens.push(
        new Token(positionX[randomPositionX], positionY, this.gameHeight)
      );
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
}

export default TokenEngine;
