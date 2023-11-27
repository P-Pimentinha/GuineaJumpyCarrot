class Background {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.position = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;
    //sprite
    this.image = waterImage;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 3;
    this.frameTimer = 0;
    this.frameInterval = 0.28 * 1000;
  }

  draw(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    this.ctx.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {}
}

export default Background;
