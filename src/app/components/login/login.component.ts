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
      this.snackBar.open('Please fill in all fields', '', {
        duration: 2000
      });
      return false;
    } 

    // validate email
    if(!this.validateService.validateEmail(this.registrationUser.email)) {
      this.snackBar.open('Use Valid Email', '', {
        duration: 2000
      });
      return false;
    }

    this.authService.registerUser(this.registrationUser).subscribe(
      res => {
        this.snackBar.open('You have been succesfully registered!', '', {
          duration: 2000
        });
        
      },
      err => {
        this.snackBar.open(err.error, "", {
          duration: 3000
        })
      }
    );
  }

  loginUser() {
    this.authService.loginUser(this.login_user)
    .subscribe(
      (res) => {
        localStorage.setItem('token', res.toString());
        this.router.navigate(['/home']);
      }
    )
  }

}
