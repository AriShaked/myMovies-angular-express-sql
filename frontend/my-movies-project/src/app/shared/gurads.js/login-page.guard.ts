import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(): boolean {
    if (this.authenticationService.loggedIn()) {
      location.replace('/home');
      return false;
    } else {
      return true;
    }
  }
}
