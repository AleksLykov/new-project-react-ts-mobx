import AuthStore from './auth.store';
import CommonStore from './common.store';

export interface IRootStore {
  auth: typeof AuthStore;
  common: typeof CommonStore;
}

export class RootStore implements IRootStore {
  auth: typeof AuthStore;
  common: typeof CommonStore;

  constructor() {
    this.auth = AuthStore; // Authorization and user interaction
    this.common = CommonStore;
  }
}

export default new RootStore();
