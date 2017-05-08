import { AsyncStorage } from 'react-native';

const FIRST_INSTALL = 'FIRST_INSTALL'
const USER_EMAIL_KEY = 'USER_EMAIL_KEY'
const SESSION_TOKEN_KEY = 'SESSION_TOKEN_KEY'

class LocalStorage {
  constructor() {
    this.FIRST_INSTALL = FIRST_INSTALL
    this.USER_EMAIL_KEY = USER_EMAIL_KEY
    this.SESSION_TOKEN_KEY = SESSION_TOKEN_KEY
  }

  getAllKey() {
    return AsyncStorage.getAllKeys()
  }

  getUserEmail() {
    return AsyncStorage.getItem(this.USER_EMAIL_KEY).then(value => JSON.parse(value));
  }
  setUserEmail(email) {
    return AsyncStorage.setItem(this.USER_EMAIL_KEY, JSON.stringify(email));
  }
  deleteUserEmail() {
    return AsyncStorage.removeItem(this.USER_EMAIL_KEY);
  }

  getSessionToken() {
    return AsyncStorage.getItem(this.SESSION_TOKEN_KEY).then(value => JSON.parse(value));
  }
  setSessionToken(token) {
    return AsyncStorage.setItem(this.SESSION_TOKEN_KEY, JSON.stringify(token));
  }
  deleteSessionToken() {
    return AsyncStorage.removeItem(this.SESSION_TOKEN_KEY);
  }

  getFirstInstall() {
    return AsyncStorage.getItem(this.FIRST_INSTALL).then(value => JSON.parse(value));
  }
  setFirstInstall(value) {
    return AsyncStorage.setItem(this.FIRST_INSTALL, JSON.stringify(value));
  }
  deleteFirstInstall() {
    return AsyncStorage.removeItem(this.FIRST_INSTALL);
  }
}

export default new LocalStorage()
