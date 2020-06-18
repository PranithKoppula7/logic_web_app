import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user';
import { ValidateService } from 'src/app/shared/services/validate.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationUser: User =  {
    firstName: "",
    lastName: "",
    email: "",
    pid: null,
    totalStars: 0,
    password: ""
  }

  login_user = {
    email : "",
    password: ""
  }

  constructor(
    private snackBar: MatSnackBar, 
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createUser() {
    // validate required fields
    if(!this.validateService.validateRegister(this.registrationUser)) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 2000
      });
      return false;
    } 

    // validate email
    if(!this.validateService.validateEmail(this.registrationUser.email)) {
      this.snackBar.open('Use Valid Email', 'Close', {
        duration: 2000
      });
      return false;
    }

    this.authService.registerUser(this.registrationUser).subscribe(
      res => console.log(res)
    );
  }

  loginUser() {
    // console.log(this.login_user);
    this.authService.loginUser(this.login_user).subscribe(
      res => {
        localStorage.setItem('token', res);
        this.router.navigate(['/home']);
      }
    )
  }

}
