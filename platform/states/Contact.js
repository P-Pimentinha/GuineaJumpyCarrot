import { states } from './PlatformStatesEnum.js';
import { PlatformState } from './PlatFormState.js';

export class Contact extends PlatformState {
  constructor(platform) {
    super('Contact');
    this.platform = platform;
  }

  enter() {
    this.platform.color = 'Green';
  }

  handleContact() {
    if (!this.platform.contact) this.platform.setState(states.NORMAL);
    if (this.platform.timer > 10)
      this.platform.setState(states.CONTACTSECONDPHASE);
  }
}
