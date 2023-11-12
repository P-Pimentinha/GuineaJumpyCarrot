import {
  StandingLeft,
  StandingRight,
  RunninRight,
  RunningLeft,
  JumpingRight,
  JumpingLeft,
  FallingRight,
  FallingLeft,
  StandingRightColision,
} from './states/impexp.js';
class Player {
  constructor(gameWidth, gameHeight, ctx, obstacle) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.obstacle = obstacle;

    //state
    this.state = [
      new StandingLeft(this),
      new StandingRight(this),
      new RunningLeft(this),
      new RunninRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),
    ];
    this.currentState = this.state[1];

    //coordinates
    this.width = 115;
    this.height = 55;
    this.position = {
      x: 400,
      y: -100,
    };

    //sprite
    this.image = playerImage;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 1;
    //deltaTime
    this.fps = 2;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
    //movement
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.maxSpeed = 10;
    this.weight = 0.5;

    this.grounded = false;
    this.colisionRight = false;
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

  update(input, deltaTime) {
    // sprite animatio

    this.boundriesColision();
    this.frameInterval = 1000 / this.fps;
    this.draw(deltaTime);
    this.currentState.handleInput(input, this.obstacle);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.grounded = false;
    this.colisionRight = false;
    this.platformColosion(this.obstacle);

    if (!this.grounded) {
      this.velocity.y += this.weight;
    } else {
      this.velocity.y = 0;
    }
  }

  setState(state) {
    this.currentState = this.state[state];
    this.currentState.enter();
  }

  boundriesColision() {
    this.position.x = Math.max(this.position.x, 0);
    this.position.x = Math.min(this.position.x, this.gameWidth - this.width);
    this.position.y = Math.min(this.position.y, this.gameHeight - this.height);
  }

  onGround() {
    return this.position.y >= this.gameHeight - this.height;
  }

  platformColosion(obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        this.position.x <= obstacle.position.x + obstacle.width &&
        this.position.x + this.width >= obstacle.position.x &&
        this.position.y <= obstacle.position.y + obstacle.height &&
        this.position.y + this.height >= obstacle.position.y
      ) {
        if (
          this.position.y + this.height >= obstacle.position.y &&
          this.position.y + this.height <= obstacle.position.y + 22 &&
          this.position.x + this.width >= obstacle.position.x + 5
        ) {
          this.grounded = true;
        }
        // if (
        //   this.position.x + this.width >= obstacle.position.x &&
        //   this.position.x + this.width <= obstacle.position.x + 5
        // ) {
        //   this.colisionRight = true;
        //   this.position.x -= 10;
        // }
      }
    });
  }
}

export default Player;
