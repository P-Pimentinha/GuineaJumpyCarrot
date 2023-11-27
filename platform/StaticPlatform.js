import Platform from './Platform.js';

class StaticPlatform extends Platform {
  constructor(x, y, width, height, gameHeight) {
    super(x, y, width, height, gameHeight);
    super.image = stoneImage;
  }

  update() {}
}

export default StaticPlatform;
