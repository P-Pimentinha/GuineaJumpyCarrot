import { states } from './StatesEnum.js';
import { State } from './State.js';

export class JumpingRight extends State {
  constructor(player, obstacle) {
    super('Jumping Right');
    this.player = player;
    this.obstacle = obstacle;
  }

  enter() {
    this.player.frameY = 4;

    this.player.velocity.y -= 20;
    this.player.velocity.x = this.player.maxSpeed * 0.5;
    this.player.maxFrame = 1;
  }

  handleInput(input) {
    if (this.player.velocity.y > 0) this.player.setState(states.FALLING_RIGHT);
    if (this.player.grounded) this.player.setState(states.STANDING_RIGHT);
  }
}
