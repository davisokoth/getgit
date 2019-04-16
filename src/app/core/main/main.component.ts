import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: User[];
  total_count: number;
  constructor() { }

  ngOnInit() {
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  logLoaded() {
    console.log('Loaded');
  }

}
