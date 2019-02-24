import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];
  @Input() search: string;
  pageCount = 0;
  pageNumber = 1;
  prevPage = 0;
  nextPage = 0;
  @Input() totalCount = 0;
  loading = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
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
    this.userService.getGitUsers(search, pageNo).subscribe(
      data => {
        this.loading = false;
        this.users = data.items;
        if (this.pageCount >= 1 && pageNo <= this.pageCount) {
          this.pageNumber = pageNo;
          this.nextPage = this.pageNumber + 1;
          this.prevPage = this.pageNumber - 1;
        }
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  traversePage(pageNo) {
    this.getPaginatedUsers(this.search, pageNo);
  }

}
