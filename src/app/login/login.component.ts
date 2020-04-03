import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { LoginCredentials } from '../models';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newCred = new LoginCredentials("", "");
  isLoggingIn:boolean = false;

  loginUser(){
    this.isLoggingIn = true;
    this.auth.login(this.newCred.email, this.newCred.password).subscribe(
    data => {
      localStorage.setItem('access_token', data['access']);
      localStorage.setItem('refresh_token', data['refresh']);
      localStorage.setItem('auth_stamp', Date());
      localStorage.setItem('last_login', Date());
      this.nav.isloggedIn = true;
      },
    error => {
      alert(error['error']['detail'])
    },
    () => {
      this.router.navigate(['home'])
    }
    );
    this.isLoggingIn = false;
  }
  constructor(public nav:NavService, public auth:AuthenticationService, public router:Router) { }


  ngOnInit(): void {
    this.nav.visible = false;
  }

}
