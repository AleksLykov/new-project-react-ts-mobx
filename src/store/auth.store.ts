// ======================================
// Authorization and user interaction. Data and Methods
// ======================================

// если нужно получить доступ к другим модулям стора
// import { RootStoreModel } from './rootStore';
// внутри класса пишем
// private rootStore: RootStoreModel;
// constructor(rootStore?: RootStoreModel) {
//   this.rootStore = rootStore;
// }
// и потом получаем доступ к другому модулю стора rootStore.otherStore.value

import { makeAutoObservable, action } from 'mobx';

export class AuthStore {
  // STATE. Observable part
  user = {
    email: '',
    firstName: 'Vasilii',
    id: 2,
    lastName: 'Popov',
  };

  isAuth = true;
  role = 'user';
  roleUrl = 'userUrl';
  token = '';

  // STATE. Computed part

  constructor() {
    makeAutoObservable(this);
  }

  // ACTIONS
  @action setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }
  @action setTokens(tokens: { accessToken: string; refreshToken: string }) {
    this.token = tokens.accessToken;
  }
}

export default new AuthStore();
