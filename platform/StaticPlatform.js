import Platform from './Platform.js';

class StaticPlatform extends Platform {
  constructor(x, y, width, height, gameHeight) {
    super(x, y, width, height, gameHeight);
  }

  update() {}
}

export default StaticPlatform;
