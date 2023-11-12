import { states } from './StatesEnum.js';
import { State } from './State.js';

export class StandingRight extends State {
  constructor(player) {
    super('STANDING RIGHT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 0;
    this.player.velocity.x = 0;
    this.player.maxFrame = 1;
    this.player.fps = 2;
  }

  handleInput(input) {
    if (input.includes('ArrowRight') && this.player.grounded)
      this.player.setState(states.RUNNING_RIGHT);
    if (input.includes('ArrowLeft')) this.player.setState(states.RUNNING_LEFT);
    if (input.includes('ArrowUp')) this.player.setState(states.JUMPING_RIGHT);
  }

  running() {}
}

export class StandingRightColision extends State {
  constructor(player) {
    super('STANDING RIGHT COLISION');
    this.player = player;
  }

  enter() {
    this.player.frameY = 0;
    this.player.velocity.x = 0;
    this.player.maxFrame = 1;
    this.player.fps = 2;
    this.x -= 1;
    this.player.colisionRight = true;
  }

  handleInput(input) {
    if (input.includes('ArrowLeft')) this.player.setState(states.RUNNING_LEFT);
    if (input.includes('ArrowUp')) this.player.setState(states.JUMPING_RIGHT);
  }

  running() {
    console.log('Hello');
  }
}
