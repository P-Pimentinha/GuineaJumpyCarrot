class Player {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 115;
    this.height = 55;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.image = playerImage;

    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 0;

    this.fps = 1;
    this.frameTimer = 0;
    this.frameInterval = 100 / this.fps;

    this.speed = 0;
    this.vy = 2;
    this.weight = 1;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(input, deltaTime) {
    // sprite animatio
    if (this.frameTimer > this.frameInterval) {
      this.frameX = this.frameX >= this.maxFrame ? 0 : this.frameX + 1;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    //controls
    this.x += this.speed;

    //movingRight
    if (input.keys.indexOf('ArrowRight') > -1) {
      this.speed = 5;
      this.maxFrame = 1;
      this.frameY = 0;
    }
    //movingLeft
    if (input.keys.indexOf('ArrowLeft') > -1) {
      this.speed = -4;
      this.maxFrame = 1;
      this.frameY = 1;
    }
    //jumping
    if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) this.vy -= 22;
    //not moving
    if (input.keys.length === 0) {
      this.speed = 0;
      this.maxFrame = 0;
    }

    //stops player from going out of border X
    this.x = Math.max(this.x, 0);
    this.x = Math.min(this.x, this.gameWidth - this.width);

    //jumping Logic
    this.y += this.vy;
    // if (!this.onGround()) {
    //   this.vy += this.weight;
    //   this.maxFrame = 1;
    //   this.frameY = 2;
    // } else {
    //   this.vy = 0;
    //   this.frameY = 1;
    //   if (input.keys.length === 0) {
    //     this.speed = 0;
    //     this.maxFrame = 0;
    //   }
    // }

    //stops player from going out of border Y
    if (this.y > this.gameHeight - this.height)
      this.y = this.gameHeight - this.height;
  }

  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}

export default Player;
