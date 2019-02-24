import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User} from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { GitResult } from 'src/app/models/git-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() endpoint;
  @Output() fetchResults: EventEmitter<GitResult> = new EventEmitter<GitResult>();
  @Output() loaded: EventEmitter<any> = new EventEmitter();

  search: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loaded.emit();
  }

  doSearch() {
    this.userService.getGitUsers(this.search, 1)
    .subscribe(
      data => {
        this.emitResults(data);
      },
      error => console.log(error)
    );
  }

  emitResults(results: GitResult) {
    this.fetchResults.emit(results);
  }
}
