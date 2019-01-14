import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from './../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) {}

  url = 'http://localhost:4000';

  userAuthentication(email, password) {
    const data = {
      email: email,
      password: password
    };
    this.setUser(data);
    return this.http.post(`${this.url}/login`, data);
  }

  signUp(email , password) {

    const data = {
      email: email,
      password: password
    };
    this.setUser(data);
    return this.http.post(`${this.url}/signup`, data);
  }

  getUserDetails() {
    return this.user;
  }

  setUser(user: User) {
    return this.user.next(user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}


