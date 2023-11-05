class Player {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 115;
    this.height = 55;
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };

    this.image = playerImage;

    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 1;

    this.fps = 1;
    this.frameTimer = 0;
    this.frameInterval = 100 / this.fps;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.weight = 0.5;
  }

  draw() {
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

  update(input, deltaTime) {
    this.draw();
    // sprite animatio
    if (this.frameTimer > this.frameInterval) {
      this.frameX = this.frameX >= this.maxFrame ? 0 : this.frameX + 1;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    //controls
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.onGround()) {
      //movingRight
      if (input.keys.indexOf('ArrowRight') > -1) {
        this.velocity.x = 5;

        this.frameY = 1;
      }
      //movingLeft
      if (input.keys.indexOf('ArrowLeft') > -1) {
        this.velocity.x = -4;

        this.frameY = 2;
      }
      //jumping
      if (input.keys.indexOf('ArrowUp') > -1) this.velocity.y -= 22;
      //not moving
      if (input.keys.length === 0) {
        this.velocity.x = 0;

        this.frameY = 0;
      }
    }

    if (!this.onGround()) {
      this.velocity.y += this.weight;

      this.frameY = 3;
      if (input.keys.indexOf('ArrowRight') > -1) {
        this.velocity.x = 4;

        this.frameY = 3;
      }
      //movingLeft
      if (input.keys.indexOf('ArrowLeft') > -1) {
        this.velocity.x = -4;

        this.frameY = 4;
      }
    }

    //stops player from going out of border X
    this.position.x = Math.max(this.position.x, 0);
    this.position.x = Math.min(this.position.x, this.gameWidth - this.width);
    //stops player from going out of border Y
    if (this.position.y > this.gameHeight - this.height)
      this.position.y = this.gameHeight - this.height;
  }

  onGround() {
    return this.position.y >= this.gameHeight - this.height;
  }
}

export default Player;
