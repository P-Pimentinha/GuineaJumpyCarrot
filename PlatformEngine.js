import FloatingPlatform from './FloatingPlatform.js';

class PlatformEngine {
  constructor() {
    this.platforms = [
      new FloatingPlatform(0, 450, 2000, 10),
      new FloatingPlatform(200, 50, 300, 10),
      // new FloatingPlatform(500, 350, 500, 55),
      // new FloatingPlatform(700, 290, 500, 55),
      // new FloatingPlatform(800, 230, 500, 55),
      // new FloatingPlatform(900, 170, 500, 55),

      // new FloatingPlatform(600, 200, 600, 400),
    ];
  }

  draw(ctx) {
    this.platforms.forEach((element) => {
      if (element.delete) {
        this.platforms = this.platforms.filter((platform) => !platform.delete);
      }
      element.update(ctx);
    });
  }
}

export default PlatformEngine;
