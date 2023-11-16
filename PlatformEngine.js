import Platform from './platform/Platform.js';

class PlatformEngine {
  constructor(gameHeight) {
    this.platforms = [
      //right
      new Platform(600, 700, 400, 40, gameHeight),
      //left
      new Platform(0, 500, 400, 40, gameHeight),
      //right
      new Platform(600, 300, 400, 40, gameHeight),
      //left
      new Platform(0, 100, 400, 40, gameHeight),
      //right
      new Platform(600, -100, 400, 40, gameHeight),
      //left
      new Platform(0, -300, 400, 40, gameHeight),
      //right
      new Platform(600, -600, 400, 40, gameHeight),
      //left
      new Platform(0, -900, 400, 40, gameHeight),
      // new Platform(0, 800, 450, 40, gameHeight),
      // new Platform(600, 800, 400, 40, gameHeight),
      // new Platform(0, 900, 1000, 40, gameHeight),
    ];
  }

  draw(ctx, deltaTime) {
    for (let i = this.platforms.length - 1; i >= 0; i--) {
      const element = this.platforms[i];
      if (element.delete) {
        this.platforms.splice(i, 1);
        break;
      }
      element.update(ctx, deltaTime);
    }
  }
}

export default PlatformEngine;
