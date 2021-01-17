import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  constructor(public usersService: UsersService) {
    this.usersList = this.usersService.getUsersList();
  }

  ngOnInit(): void {
  }
  search(searchQuery: string): void {
    this.usersList = this.usersService.findUsers(searchQuery);
  }
  sort(order: string): void {
    this.usersList = this.usersService.sortUsers(order);
  }
}
