import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPNotification } from '../../models/ipnotification';
import { SearchResult } from '../../models/search-result.model';
import { NotificationHandlerService } from '../../services/notification/notification-handler.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() endpoint;
  @Output() fetchResults: EventEmitter<SearchResult> = new EventEmitter<SearchResult>();
  @Output() loaded: EventEmitter<any> = new EventEmitter();

  search: string;
  loading = false;

  constructor(
    private userService: UserService,
    private errorService: NotificationHandlerService
  ) { }

  ngOnInit() {
    this.loaded.emit();
  }

  doSearch() {
    this.loading = true;
    this.userService.getUsers(this.search, 1)
    .subscribe(
      data => {
        this.loading = false;
        this.errorService.handleNotification('Success', 'Data fetch complete.', IPNotification.severity.LOW);
        this.emitResults(data);
      },
      error => {
        this.loading = false;
        this.errorService.handleNotification('ERROR', error, IPNotification.severity.HIGH);
      }
    );
  }

  emitResults(results: SearchResult) {
    this.fetchResults.emit(results);
  }
}
