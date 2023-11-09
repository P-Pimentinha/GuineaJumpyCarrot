import { states } from './StatesEnum.js';
import { State } from './State.js';

export class RunningLeft extends State {
  constructor(player) {
    super('Running Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 3;
    this.player.velocity.x = -this.player.maxSpeed;
    this.player.maxFrame = 1;
    this.player.fps = 6;
  }

  handleInput(input) {
    if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    if (input === 'RELEASE left') this.player.setState(states.STADING_LEFT);
    if (input === 'PRESS up') this.player.setState(states.JUMPING_LEFT);
  }
}