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
  FallingLeftColision,
  FallingRightColision,
} from './states/impexp.js';
class Player {
  constructor(gameWidth, gameHeight, ctx, obstacle, tokens) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.obstacle = obstacle;
    this.tokens = tokens;

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
      new FallingLeftColision(this),
      new FallingRightColision(this),
    ];
    this.currentState = this.state[1];

    //coordinates
    this.width = 115;
    this.height = 55;
    this.position = {
      x: 700,
      y: 600,
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
    this.colisionBottom = false;
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
    this.colisionReset();
    this.platformColosion(this.obstacle);
    this.tokenCollision(this.tokens);
    //gravity
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
    // this.position.y = Math.min(this.position.y, this.gameHeight - this.height);
  }

  // onGround() {
  //   return this.position.y >= this.gameHeight - this.height;
  // }

  platformColosion(obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];

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
          this.position.y = obstacle.position.y - (this.height - 5);
          obstacle.contact = true;

          break;
        } else if (
          // Check if the contact is made specifically on the top
          this.position.y <= obstacle.position.y + obstacle.height &&
          this.position.y >= obstacle.position.y + obstacle.height - 15
        ) {
          this.colisionBottom = true;
          break;
        }
      } else {
        obstacle.contact = false;
      }
    }
  }

  tokenCollision(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (
        this.position.x <= token.position.x + token.width &&
        this.position.x + this.width >= token.position.x &&
        this.position.y <= token.position.y + token.height &&
        this.position.y + this.height >= token.position.y
      ) {
        token.delete = true;
      }
    }
  }

  colisionReset() {
    this.grounded = false;
    this.colisionRight = false;
    this.colisionBottom = false;
  }
}

export default Player;

//  obstacles.forEach((obstacle) => {
//    if (
//      this.position.x <= obstacle.position.x + obstacle.width &&
//      this.position.x + this.width >= obstacle.position.x &&
//      this.position.y <= obstacle.position.y + obstacle.height &&
//      this.position.y + this.height >= obstacle.position.y
//    ) {
//      if (
//        this.position.y + this.height >= obstacle.position.y &&
//        this.position.y + this.height <= obstacle.position.y + 22 &&
//        this.position.x + this.width >= obstacle.position.x + 5
//      ) {
//        this.grounded = true;
//        this.position.y = obstacle.position.y - (this.height - 5);
//      }
//      // if (
//      //   this.position.x + this.width >= obstacle.position.x &&
//      //   this.position.x + this.width <= obstacle.position.x + 5
//      // ) {
//      //   this.colisionRight = true;
//      //   this.position.x -= 10;
//      // }

//      // // Check if the contact is made specifically on the right
//      // if (
//      //   this.position.x + this.width >= obstacle.position.x &&
//      //   this.position.x + this.width <= obstacle.position.x + 10
//      // ) {
//      //   // Perform your action when contact is on the right (e.g., bounce, stop, etc.)
//      //   // Replace `10` with the desired threshold value for what you consider as a "right" collision
//      // }

//      // // Check if the contact is made specifically on the left
//      // if (
//      //   this.position.x <= obstacle.position.x + obstacle.width &&
//      //   this.position.x >= obstacle.position.x + obstacle.width - 10
//      // ) {
//      //   // Perform your action when contact is on the left (e.g., bounce, stop, etc.)
//      //   // Replace `10` with the desired threshold value for what you consider as a "left" collision
//      // }
//    }
//  });
