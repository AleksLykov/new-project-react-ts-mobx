// ======================================
// Common information. Data and methods
// ======================================

import { makeAutoObservable, action } from 'mobx';
import { AnyObject } from 'types/common';
import { UserRole } from 'types/enums/userRoles';

export class CommonStore {
  // STATE. Observable part
  currentPath = '';

  // STATE. Computed part
  get main(): null {
    return null;
  }

  constructor() {
    makeAutoObservable(this);
  }

  // ACTIONS
  @action setCurrentPath(path: string) {
    this.currentPath = path;
  }
  @action setFilter(parameters: AnyObject, role: UserRole) {
    // this.filter = { ...this.filter, [role]: parameters };
  }
}

export default new CommonStore();
