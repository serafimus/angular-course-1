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
  username = '';
  name = '';
  role = '';
  selectedUsers: User[] = [];

  constructor(public usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

  search(searchQuery: string): void {
    this.usersList = this.usersService.findUsers(searchQuery);
  }

  sort(order: string): void {
    this.usersList = this.usersService.sortUsers(order);
  }

  addUser(): void {
    this.usersService.addUser({
      id: Math.random() * 100,
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: ''
    });
    this.usersList = this.usersService.getUsersList();
  }

  deleteUsers(): void {
    this.usersService.deleteUsers(this.selectedUsers);
    this.usersList = this.usersService.getUsersList();
  }

  selectUsers(users: any): void {
    this.selectedUsers = [];
    users.forEach((element:any) => {
      this.selectedUsers.push(element.value as User);
    });
  }
}
