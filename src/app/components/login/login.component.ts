import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

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
    pid: 0,
    totalStars: 0,
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.user);
  }

}
