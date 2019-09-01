import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  result$: Observable<SearchResult>;
  total_count = 100;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  setUsers(result: Observable<SearchResult>) {
    this.result$ = result;
  }

  getUsers() {
    this.result$ = this.userService.getAllUsers();
  }

}
