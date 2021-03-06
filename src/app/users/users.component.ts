import { Component, OnInit } from '@angular/core';
import { User } from './users';
import { USERS } from '../listusers';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })


export class UsersComponent implements OnInit {

    users = USERS;
    selectedUser?: User;

    constructor() {}

    ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}