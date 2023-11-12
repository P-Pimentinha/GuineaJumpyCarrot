import { states } from './StatesEnum.js';
import { State } from './State.js';

export class StandingLeft extends State {
  constructor(player) {
    super('STANDING LEFT');
    this.player = player;
  }

  enter() {
    this.player.frameY = 1;
    this.player.velocity.x = 0;
    this.player.maxFrame = 1;
    this.player.fps = 2;
  }

  handleInput(input) {
    if (input.includes('ArrowLeft')) this.player.setState(states.RUNNING_LEFT);
    if (input.includes('ArrowRight') && this.player.grounded)
      this.player.setState(states.RUNNING_RIGHT);
    if (input.includes('ArrowUp')) this.player.setState(states.JUMPING_LEFT);
  }
}
