import { Normal, Contact } from './states/impexp.js';

class Platform {
  constructor(x, y, width, height, gameHeight) {
    this.position = {
      x: x,
      y: y,
    };
    this.gameHeight = gameHeight;
    this.width = width;
    this.height = height;

    this.state = [new Normal(this), new Contact(this)];
    this.currentState = this.state[0];
    this.contact = false;
    this.delete = false;

    //sprite
    // this.image = playerImage;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 1;
    //deltaTime

    this.frameTimer = 0;
    this.frameInterval = 5 * 1000;
    this.speed = 0.5;
    //to delete
    this.color = 'black';
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(ctx, deltaTIme) {
    if (this.frameTimer > this.frameInterval) {
      this.speed += 0.5;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTIme;
    }

    this.position.y += this.speed;
    if (this.position.y > this.gameHeight + this.height) this.delete = true;

    this.draw(ctx);
    this.currentState.handleContact();
    // this.contact = false;
  }

  setState(state) {
    this.currentState = this.state[state];
    this.currentState.enter();
  }
}

export default Platform;
