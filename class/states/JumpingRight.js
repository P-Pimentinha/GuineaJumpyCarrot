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
    this.player.grounded = false;
    this.player.velocity.y -= 13;
    this.player.velocity.x = this.player.maxSpeed * 0.55;
    this.player.maxFrame = 1;
    this.player.jumping = true;
  }

  handleInput(input) {
    if (!input.includes('ArrowUp')) {
      this.player.velocity.y = 0;
      this.player.setState(states.FALLING_RIGHT);
    }

    if (this.player.velocity.y > 0) this.player.setState(states.FALLING_RIGHT);
  }
}

//  if (this.player.colisionBottom) {
//       this.player.setState(states.FALLING_RIGHT_COLISION);
//     } else if (this.player.velocity.y > 0) {
//       this.player.setState(states.FALLING_RIGHT);
//     } else if (this.player.grounded) {
//       this.player.setState(states.STANDING_RIGHT);
//     }
//   }
