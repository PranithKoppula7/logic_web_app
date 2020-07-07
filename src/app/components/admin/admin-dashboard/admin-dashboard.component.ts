import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  adminName: string;

  constructor() { }

  ngOnInit(): void {
    this.adminName = localStorage.getItem('firstName');
    this.adminName = this.adminName.charAt(0).toUpperCase() + this.adminName.substring(1, this.adminName.length);
  }

}
