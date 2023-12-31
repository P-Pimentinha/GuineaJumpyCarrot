import { states } from './StatesEnum.js';
import { State } from './State.js';

export class FallingRightColision extends State {
  constructor(player) {
    super('Falling RIGHT COLISION');
    this.player = player;
  }

  enter() {
    this.player.grounded = false;
    this.player.velocity.y += 14;
    this.player.velocity.x = 0;
    this.player.jumping = false;
  }

  handleInput(input) {
    if (this.player.grounded) this.player.setState(states.STANDING_RIGHT);
  }
}
