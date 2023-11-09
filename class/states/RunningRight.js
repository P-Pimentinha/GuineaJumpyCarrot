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
  }

  handleInput(input) {
    if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    if (input === 'RELEASE right') this.player.setState(states.STANDING_RIGHT);
    if (input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
  }
}
