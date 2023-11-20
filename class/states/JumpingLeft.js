import { states } from './StatesEnum.js';
import { State } from './State.js';

export class JumpingLeft extends State {
  constructor(player, obstacle) {
    super('Jumping Left');
    this.player = player;
    this.obstacle = obstacle;
  }

  enter() {
    this.player.frameY = 5;
    this.player.grounded = false;
    this.player.velocity.y -= 13;
    this.player.velocity.x = -this.player.maxSpeed * 0.55;
    this.player.maxFrame = 1;
    this.player.jumping = true;
  }

  handleInput(input) {
    if (!input.includes('ArrowUp')) {
      this.player.velocity.y = 0;
      this.player.setState(states.FALLING_LEFT);
    }

    if (this.player.velocity.y > 0) this.player.setState(states.FALLING_LEFT);
  }
}

// if (this.player.colisionBottom) {
//   this.player.setState(states.FALLING_LEFT_COLISION);
// } else if (this.player.velocity.y > 0) {
//   this.player.setState(states.FALLING_LEFT);
// } else if (this.player.grounded) {
//   this.player.setState(states.STADING_LEFT);
// }
