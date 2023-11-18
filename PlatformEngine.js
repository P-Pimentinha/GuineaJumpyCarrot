import Platform from './platform/Platform.js';

class PlatformEngine {
  constructor(gameHeight) {
    this.platforms = this.generatePlatforms(gameHeight);
  }

  draw(ctx, deltaTime) {
    for (let i = this.platforms.length - 1; i >= 0; i--) {
      const element = this.platforms[i];
      if (element.position.y < -1) {
        element.update(deltaTime);
        continue;
      }

      if (element.delete) {
        this.platforms.splice(i, 1);
        continue;
      }

      element.update(deltaTime);
      element.draw(ctx);
    }
  }

  generatePlatforms(gameHeight) {
    let platformsArray = [];

    let left = { x: 100, y: 750 };
    let right = { x: 600, y: 600 };

    for (let i = 0; i < 200; i++) {
      //left
      platformsArray.push(new Platform(left.x, left.y, 300, 20, gameHeight));
      left.y -= 300;
      //right
      platformsArray.push(new Platform(right.x, right.y, 300, 20, gameHeight));
      right.y -= 300;
    }
    return platformsArray;
  }
}

export default PlatformEngine;
