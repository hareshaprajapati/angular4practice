import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 800);
    });
    return promise;

  }

  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
