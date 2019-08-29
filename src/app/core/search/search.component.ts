import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { NotificationHandlerService } from 'src/app/services/notification-handler.service';
import { IPNotification} from '../../shared/models/ipnotification';

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

  emitResults(results: User[]) {
    this.fetchResults.emit(results);
  }
}
