import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken;
  // currUser: User;
  private registerUrl = "http://localhost:3000/api/user/register";
  private loginUrl = "http://localhost:3000/api/user/login";

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: User) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.registerUrl, user, 
      {
        headers: header
      });
  }

  loginUser(user) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.loginUrl, user, 
      { 
        headers: header,
      })
      // .subscribe(
      //   (res: any) => {
      //     localStorage.setItem('token', res.token);
      //     localStorage.setItem('firstName', res._user.firstName);
      //     localStorage.setItem('totalStars', res._user.totalStars);
      //     this.router.navigate(['/home']);
      //   }
      // );
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
    
  }
}
