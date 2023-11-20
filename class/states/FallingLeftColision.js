import { states } from './StatesEnum.js';
import { State } from './State.js';

export class FallingLeftColision extends State {
  constructor(player) {
    super('Falling Left COLISION');
    this.player = player;
  }

  enter() {
    this.player.grounded = false;
    this.player.velocity.y += 20;
    this.player.velocity.x = 0;
    this.player.jumping = false;
  }

  handleInput(input) {
    if (this.player.grounded) this.player.setState(states.STADING_LEFT);
  }
}
