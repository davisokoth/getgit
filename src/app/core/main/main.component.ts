import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users$: Observable<User[]>;
  total_count: number = 100;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  setUsers(users$: Observable<User[]>) {
    this.users$ = users$;
  }

  getUsers() {
    this.users$ = this.userService.getAllUsers();
  }

}
