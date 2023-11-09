import {
  StandingLeft,
  StandingRight,
  RunninRight,
  RunningLeft,
  JumpingRight,
  JumpingLeft,
} from './states/impexp.js';
class Player {
  constructor(gameWidth, gameHeight, ctx) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    //state
    this.state = [
      new StandingLeft(this),
      new StandingRight(this),
      new RunningLeft(this),
      new RunninRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
    ];
    this.currentState = this.state[1];

    //coordinates
    this.width = 115;
    this.height = 55;
    this.position = {
      x: 400,
      y: this.gameHeight - this.height,
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
    this.currentState.handleInput(input);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (!this.onGround()) {
      this.velocity.y += this.weight;
    } else {
      this.vy = 0;
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

  platformColosion(obstacle) {
    if (
      this.position.x <= obstacle.position.x + obstacle.width &&
      this.position.x + this.width >= obstacle.position.x &&
      this.position.y <= obstacle.position.y + obstacle.height &&
      this.position.y + this.height >= obstacle.position.y
    )
      console.log('hello');
  }
}

export default Player;
