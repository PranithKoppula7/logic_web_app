import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken;
  private registerUrl = "http://localhost:3000/api/user/register";
  private loginUrl = "http://localhost:3000/api/user/login";

  constructor(private http: HttpClient) { }

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

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
