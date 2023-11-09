import { states } from './StatesEnum.js';
import { State } from './State.js';

export class JumpingLeft extends State {
  constructor(player) {
    super('Jumping Left');
    this.player = player;
  }

  enter() {
    this.player.frameY = 5;
    if (this.player.onGround()) this.player.velocity.y -= 20;
    this.player.velocity.x = -this.player.maxSpeed * 0.2;
    this.player.maxFrame = 1;
  }

  handleInput(input) {
    if (this.player.onGround()) this.player.setState(states.STADING_LEFT);
    if (input === 'PRESS left') this.player.position.x -= 2;
  }
}
