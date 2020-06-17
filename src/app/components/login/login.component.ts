import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/shared/models/user';
import { ValidateService } from 'src/app/shared/services/validate.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User =  {
    firstName: "",
    lastName: "",
    email: "",
    pid: null,
    totalStars: 0,
    password: ""
  }

  constructor(
    private snackBar: MatSnackBar, 
    private validateService: ValidateService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  createUser() {
    // validate required fields
    if(!this.validateService.validateRegister(this.user)) {
      this.snackBar.open('Please fill in all fields', 'Close', {
        duration: 2000
      });
      return false;
    } 

    // validate email
    if(!this.validateService.validateEmail(this.user.email)) {
      this.snackBar.open('Use Valid Email', 'Close', {
        duration: 2000
      });
      return false;
    }
  }

  loginUser() {
    this.authService.loginUser(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
