import store from '@/redux/store.js';
import { _setCurrentAccount } from '@/redux/auth/index.js';

export const setActiveAccount = (account) =>
  store.dispatch(_setCurrentAccount(account));
