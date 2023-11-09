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
    if (input.includes('ArrowRight'))
      this.player.setState(states.RUNNING_RIGHT);
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
  }
}
