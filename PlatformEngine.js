import Platform from './platform/Platform.js';
import StaticPlatform from './platform/StaticPlatform.js';

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
    let platformsArray = [
      new StaticPlatform(0, 350, 120, 50, gameHeight),
      new StaticPlatform(0, 750, 120, 50, gameHeight),
      new StaticPlatform(880, 300, 120, 50, gameHeight),
      new StaticPlatform(880, 600, 120, 50, gameHeight),
      new StaticPlatform(450, 850, 120, 50, gameHeight),
      new StaticPlatform(450, 480, 120, 50, gameHeight),
      new StaticPlatform(450, 200, 120, 50, gameHeight),
      // new Platform(150, 950, 400, 20, gameHeight),
      // new Platform(680, 800, 500, 20, gameHeight),
    ];

    let left = { x: 150, y: 850, width: 150 };
    let right = { x: 600, y: 700, width: 140 };

    for (let i = 0; i < 200; i++) {
      let randomWidthLeft = Math.floor(Math.random() * (150 - 130 + 1)) + 130;
      let randomWidthRight = Math.floor(Math.random() * (160 - 140 + 1)) + 130;
      let randomPlatY = Math.floor(Math.random() * (500 - 350 + 1)) + 350;
      let randomPlatXLeft = Math.floor(Math.random() * (250 - 200 + 1)) + 200;
      let randomPlatXRight = Math.floor(Math.random() * (650 - 600 + 1)) + 600;

      //left
      platformsArray.push(
        new Platform(left.x, left.y, left.width, 20, gameHeight)
      );
      left.y -= randomPlatY;
      left.x = randomPlatXLeft;
      left.width = randomWidthLeft;

      //right
      platformsArray.push(
        new Platform(right.x, right.y, right.width, 20, gameHeight)
      );
      right.y -= randomPlatY;
      right.x = randomPlatXRight;
      right.width = randomWidthRight;
    }
    return platformsArray;
  }
}

export default PlatformEngine;
