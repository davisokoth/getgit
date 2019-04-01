import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import { GitResult } from 'src/app/models/git-result.model';

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

  setUsers(result: GitResult) {
    this.users = result.items;
    this.total_count = result.total_count;
  }

  logLoaded() {
    console.log('Loaded');
  }

}
