import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];
  @Input() search: string;
  pageCount = 0;
  pageNumber = 1;
  prevPage = 0;
  nextPage = 0;
  totalCount: number;
  loading = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.users) {
      this.totalCount = this.users.length;
    }
    this.resetComponentState();
  }

  resetComponentState() {
    this.pageNumber = 1;
    this.nextPage = 2;
    this.totalCount = this.totalCount;
    this.pageCount = Math.ceil(this.totalCount / 30);
  }

  getPaginatedUsers(search: string, pageNo: number) {
    this.loading = true;
    this.userService.getUsers(search, pageNo);
  }

  traversePage(pageNo) {
    this.getPaginatedUsers(this.search, pageNo);
  }

}
