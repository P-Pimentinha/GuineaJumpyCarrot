import { states } from './PlatformStatesEnum.js';
import { PlatformState } from './PlatFormState.js';

export class Contact extends PlatformState {
  constructor(platform) {
    super('Contact');
    this.platform = platform;
  }

  enter() {}

  handleContact() {
    if (!this.platform.contact) this.platform.setState(states.NORMAL);
    if (this.platform.timer > 5)
      this.platform.setState(states.CONTACTSECONDPHASE);
  }
}
