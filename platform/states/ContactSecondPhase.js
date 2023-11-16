// import { states } from './PlatformStatesEnum.js';
import { PlatformState } from './PlatFormState.js';

export class ContactSecondPhase extends PlatformState {
  constructor(platform) {
    super('Contact Second Phase');
    this.platform = platform;
  }

  enter() {
    this.platform.color = 'Red';
    //logic to change sprite
  }

  handleContact() {
    if (this.platform.timer > 20) this.platform.delete = true;
  }
}
