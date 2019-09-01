import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/shared/models/git-result.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  results$: Observable<SearchResult>;
  users$: Observable<User[]>;
  total_count: number = 100;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  setUsers(results: Observable<SearchResult>) {
    this.results$ = results;
  }

  getUsers() {
    this.users$ = this.userService.getAllUsers();
  }

}
