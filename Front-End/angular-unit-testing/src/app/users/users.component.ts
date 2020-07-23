import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  text = 'user page';
  users;

  constructor(private userServie: UsersService) {
    this.users = this.userServie.getUsers();
  }

}
