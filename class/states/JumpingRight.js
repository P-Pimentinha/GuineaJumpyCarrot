import { states } from './StatesEnum.js';
import { State } from './State.js';

export class JumpingRight extends State {
  constructor(player) {
    super('Jumping Right');
    this.player = player;
  }

  enter() {
    this.player.frameY = 4;
    if (this.player.onGround()) this.player.velocity.y -= 20;
    this.player.velocity.x = this.player.maxSpeed * 0.2;
    this.player.maxFrame = 1;
  }

  handleInput(input) {
    if (this.player.onGround()) this.player.setState(states.STANDING_RIGHT);
    if (input === 'PRESS right') this.player.position.x += 2;
  }
}
