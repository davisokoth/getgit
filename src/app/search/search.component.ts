import { Component, OnInit } from '@angular/core';
import { User} from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  users: User[];
  pageCount = 0;
  pageNumber = 0;
  prevPage = 0;
  nextPage = 0;
  totalCount = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {}

  getPaginatedUsers(search: string, pageNo: number) {
    console.log('Search clicked');
    this.userService.getGitUsers(search, pageNo).subscribe(
      data => {
        this.users = data.items;
        this.pageCount = Math.ceil(data.total_count / 30);
        this.totalCount = data.total_count;
        if (this.pageCount >= 1 && pageNo <= this.pageCount) {
          this.pageNumber = pageNo;
          this.nextPage = this.pageNumber + 1;
          this.prevPage = this.pageNumber - 1;
        }
      },
      error => console.log(error)
    );
  }

  doSearch() {
    this.getPaginatedUsers(this.search, 1);
  }

  traversePage(pageNo) {
    this.getPaginatedUsers(this.search, pageNo);
  }

}
