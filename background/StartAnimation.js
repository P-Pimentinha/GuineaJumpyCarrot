class StartAnimation {
  constructor(ctx, animationWidth, animationHeight) {
    this.ctx = ctx;
    this.animationHeight = animationHeight;
    this.animationWidth = animationWidth;
    this.position = {
      x: 90,
      y: 0,
    };
    this.width = 100;
    this.height = 100;
    this.image = startAnimation;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 8;
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

export default StartAnimation;
