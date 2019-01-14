import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../shared/models/user';
import { AuthenticationService } from './../../shared/services/authentication.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  user: Observable<User>;

  constructor(private authenticationService: AuthenticationService , private router: Router) { }

  ngOnInit() {

  this.authenticationService.getUserDetails().subscribe(result => {
    this.user = result;
  });
  }

  logout() {

    localStorage.clear();
    this.router.navigate([`/login`]);

}
}
