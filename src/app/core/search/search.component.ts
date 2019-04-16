import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() endpoint;
  @Output() fetchResults: EventEmitter<User[]> = new EventEmitter<User[]>();
  @Output() loaded: EventEmitter<any> = new EventEmitter();

  search: string;
  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loaded.emit();
  }

  doSearch() {
    this.loading = true;
    this.userService.getUsers(this.search, 1)
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

  emitResults(results: User[]) {
    this.fetchResults.emit(results);
  }
}
