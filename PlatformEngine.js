import FloatingPlatform from './FloatingPlatform.js';

class PlatformEngine {
  constructor() {
    this.platforms = [
      // new FloatingPlatform(0, 900, 2000, 10),

      //right
      new FloatingPlatform(600, 700, 400, 40),
      //left
      new FloatingPlatform(0, 500, 400, 40),

      //right
      new FloatingPlatform(600, 300, 400, 40),
      //left
      new FloatingPlatform(0, 100, 400, 40),

      //right
      new FloatingPlatform(600, -100, 400, 40),
      //left
      new FloatingPlatform(0, -300, 400, 40),

      //right
      new FloatingPlatform(600, -600, 400, 40),
      //left
      new FloatingPlatform(0, -900, 400, 40),
    ];
  }

  draw(ctx) {
    for (let i = this.platforms.length - 1; i >= 0; i--) {
      const element = this.platforms[i];
      if (element.delete) {
        this.platforms.splice(i, 1);
        break;
      }
      element.update(ctx);
    }
  }
}

export default PlatformEngine;
