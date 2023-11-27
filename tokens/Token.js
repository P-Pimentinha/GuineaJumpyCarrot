class Token {
  constructor(x, y, gameHeight) {
    this.position = { x: x, y: y };
    this.gameHeight = gameHeight;
    this.width = 50;
    this.height = 50;
    this.speed = 2;

    this.delete = false;

    // Array of possible image values
    this.possibleImages = [kiwiImage, waterMelonImage, cucumberImage];
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 1;

    // Select a random image value
    this.image =
      this.possibleImages[
        Math.floor(Math.random() * this.possibleImages.length)
      ];

    //deltatime UpdateToken Animation
    this.frameTimerAnimation = 0;
    this.frameIntervalAnimation = 1 * 1000;
  }

  draw(ctx, deltaTime) {
    // ctx.fillStyle = 'Orange';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.spriteAnimation(deltaTime);

    ctx.drawImage(
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

  update(ctx, deltaTime) {
    if (this.position.y > this.gameHeight) this.delete = true;
    this.position.y += this.speed;
    this.draw(ctx, deltaTime);
  }

  spriteAnimation(deltaTime) {
    if (this.frameTimerAnimation > this.frameIntervalAnimation) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
      this.frameTimerAnimation = 0;
    } else {
      this.frameTimerAnimation += deltaTime;
    }
  }
}

export default Token;
