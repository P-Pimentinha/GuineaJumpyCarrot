import { states } from './StatesEnum.js';
import { State } from './State.js';

export class RunninRight extends State {
  constructor(player) {
    super('Running Right');
    this.player = player;
  }

  enter() {
    this.player.frameY = 2;
    this.player.velocity.x = this.player.maxSpeed;
    this.player.maxFrame = 1;
    this.player.fps = 6;
    this.player.jumping = false;
  }

  handleInput(input) {
    // if (this.player.colisionRight)
    //   this.player.setState(states.STANDING_RIGHT_COLISION);
    if (input.includes('ArrowLeft')) this.player.setState(states.STADING_LEFT);
    if (!input.includes('ArrowRight'))
      this.player.setState(states.STANDING_RIGHT);
    if (input.includes('ArrowUp')) this.player.setState(states.JUMPING_RIGHT);
  }
}
