class WinAnimation {
  constructor(ctx, animationWidth, animationHeight) {
    this.ctx = ctx;
    this.animationHeight = animationHeight;
    this.animationWidth = animationWidth;
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = 400;
    this.height = 600;
    this.image = winAnimation;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 7;
    //deltaTime
    this.frameTimer = 0;
    this.frameInterval = 0.4 * 1000;
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
}

export default WinAnimation;
