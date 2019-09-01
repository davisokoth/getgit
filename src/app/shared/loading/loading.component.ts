import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loading$ = this.loadingService.getLoading();
  }

}
