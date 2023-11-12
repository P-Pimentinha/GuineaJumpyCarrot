import { states } from './StatesEnum.js';
import { State } from './State.js';

export class FallingRight extends State {
  constructor(player) {
    super('Falling Right');
    this.player = player;
  }

  enter() {
    this.player.velocity.x = this.player.maxSpeed * 0.5;
  }

  handleInput(input) {
    if (this.player.grounded) this.player.setState(states.STANDING_RIGHT);
  }
}
