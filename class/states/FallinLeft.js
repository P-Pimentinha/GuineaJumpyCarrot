import { states } from './StatesEnum.js';
import { State } from './State.js';

export class FallingLeft extends State {
  constructor(player) {
    super('Falling Left');
    this.player = player;
  }

  enter() {
    this.player.velocity.x = -this.player.maxSpeed * 0.5;
  }

  handleInput(input) {
    if (this.player.grounded) this.player.setState(states.STADING_LEFT);
  }
}
