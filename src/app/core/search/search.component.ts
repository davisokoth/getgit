import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User} from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() endpoint;
  @Output() fetchResults = new EventEmitter<User[]>();
  search: string;

  constructor(private userService: UserService) { }

  ngOnInit() {}

  doSearch() {
    this.userService.getGitUsers(this.search, 1)
    .subscribe(
      data => {
        this.emitResults(data.items);
      },
      error => console.log(error)
    );
  }

  emitResults(results: User[]) {
    console.log('Emitted!');
    this.fetchResults.emit(results);
  }

}
