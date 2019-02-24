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
  pageNumber = 0;
  prevPage = 0;
  nextPage = 0;
  totalCount = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // console.log(this.users);
    this.resetComponentState();
    console.log(this.users);
  }

  resetComponentState() {
    this.pageCount = Math.ceil(this.totalCount / 30);
  }

  getPaginatedUsers(search: string, pageNo: number) {
    this.userService.getGitUsers(search, pageNo).subscribe(
      data => {
        this.users = data.items;
        if (this.pageCount >= 1 && pageNo <= this.pageCount) {
          this.pageNumber = pageNo;
          this.nextPage = this.pageNumber + 1;
          this.prevPage = this.pageNumber - 1;
        }
      },
      error => console.log(error)
    );
  }

  traversePage(pageNo) {
    this.getPaginatedUsers(this.search, pageNo);
  }

}
