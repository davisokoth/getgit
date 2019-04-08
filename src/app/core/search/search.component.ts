import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GitResult } from '../../shared/models/git-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() endpoint;
  @Output() fetchResults: EventEmitter<GitResult> = new EventEmitter<GitResult>();
  @Output() loaded: EventEmitter<any> = new EventEmitter();

  search: string;
  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loaded.emit();
  }

  doSearch() {
    this.loading = true;
    this.userService.getGitUsers(this.search, 1)
    .subscribe(
      data => {
        this.loading = false;
        this.emitResults(data);
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  emitResults(results: GitResult) {
    this.fetchResults.emit(results);
  }
}
