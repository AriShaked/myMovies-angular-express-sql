import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  error: string;
  signIn: boolean;
  signUp: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signIn = true;
    this.signUp = false;
  }

  userValidation(email, password) {
    console.log(email, password);

    this.authenticationService.userAuthentication(email, password).subscribe((result: any) => {
        console.log(result);

        if (result.message === 'Authentication succeed') {
          console.log(result);
          localStorage.setItem('token' , result.token);
          this.router.navigate([`/home`]);
        } else {
          this.error = result.message;
          this.signUp = true;
        }
      });
  }

  signUpNewUser(email, password) {
    this.authenticationService.signUp(email, password).subscribe((result: any) => {
        console.log(result);

        if (result.message === 'new user added') {
          localStorage.setItem('token' , result.token);
          console.log(result);
          this.router.navigate([`/home`]);
        } else {
          this.error = result.message;

        }
      });
  }
}
