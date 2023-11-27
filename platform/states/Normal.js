import { states } from './PlatformStatesEnum.js';
import { PlatformState } from './PlatFormState.js';

export class Normal extends PlatformState {
  constructor(platform) {
    super('Normal');
    this.platform = platform;
  }

  enter() {}

  handleContact() {
    if (this.platform.contact) this.platform.setState(states.CONTACT);
  }
}
