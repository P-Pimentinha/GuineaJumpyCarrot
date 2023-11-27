import { Normal, Contact, ContactSecondPhase } from './states/impexp.js';

class Platform {
  constructor(x, y, width, height, gameHeight) {
    this.position = {
      x: x,
      y: y,
    };
    this.gameHeight = gameHeight;
    this.width = width;
    this.height = height;

    this.state = [
      new Normal(this),
      new Contact(this),
      new ContactSecondPhase(this),
    ];
    this.currentState = this.state[0];
    this.contact = false;
    this.delete = false;

    //sprite
    this.image = plankImage;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 1;
    //deltaTimeUpdate Speed
    this.frameTimer = 0;
    this.frameInterval = 10 * 1000;
    this.speed = 1.2;

    //deltaTime Update Platform Contact Length
    this.frameTimerPlatform = 0;
    this.frameIntervalPlatform = 1 * 1000;

    //deltatime UpdatePlatform Animation
    this.frameTimerAnimation = 0;
    this.frameIntervalAnimation = 1 * 1000;

    //to delete
    this.color = 'black';
    //counter
    this.timer = 0;
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

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

  update(deltaTIme) {
    // if (this.frameTimer > this.frameInterval) {
    //   this.speed += 0.5;
    //   this.frameTimer = 0;
    // } else {
    //   this.frameTimer += deltaTIme;
    // }
    this.spriteAnimation(deltaTIme);
    this.moveY();

    if (this.contact) this.timerAdd(deltaTIme);
    if (this.position.y > this.gameHeight + this.height) this.delete = true;
    else false;

    this.currentState.handleContact();
  }

  setState(state) {
    this.currentState = this.state[state];
    this.currentState.enter();
  }

  timerAdd(deltaTIme) {
    if (this.frameTimerPlatform > this.frameIntervalPlatform) {
      this.timer++;
      this.frameTimerPlatform = 0;
    } else {
      this.frameTimerPlatform += deltaTIme;
    }
  }

  moveY() {
    this.position.y += this.speed;
  }

  spriteAnimation(deltaTime) {
    if (this.frameTimerAnimation > this.frameIntervalAnimation) {
      if (this.frameY < this.maxFrame) this.frameY++;
      else this.frameY = 0;
      this.frameTimerAnimation = 0;
    } else {
      this.frameTimerAnimation += deltaTime;
    }
  }
}

export default Platform;
