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

  hide = true;

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
        });
      }
    );
  }

  loginUser() {
     // validate email
     if(!this.validateService.validateEmail(this.login_user.email)) {
      this.snackBar.open('Use Valid Email', '', {
        duration: 2000
      });
      return false;
    }

    this.authService.loginUser(this.login_user)
    .subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('firstName', res._user.firstName);
        localStorage.setItem('totalStars', res._user.totalStars);
        localStorage.setItem('role', res._user.role);
        if(res._user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
        
      },
      (err) => {
        this.snackBar.open(err.error, "", {
          duration: 3000
        });
      }
    );
  }

}
