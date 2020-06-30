import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = (this.authService.getRole() == 'admin');
  }

  onLogout() {
    this.authService.logOut();
  }

}
