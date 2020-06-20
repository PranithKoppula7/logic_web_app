import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken;
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
        responseType: 'text'
      });
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
