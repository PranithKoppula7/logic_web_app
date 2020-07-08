import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['first-name', 'last-name', 'pid', 'role', 'stars',  'actions'];

  constructor(private authService: AuthService) {
    this.authService.getUsers().subscribe((res: User[]) => {
      this.users = res
    })
   }

  ngOnInit(): void {
  }

}
