import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoadingHandlerService } from './loading-handler.service';

@Injectable({
  providedIn: 'root'
})
/**
 * This is being depricated in favor of subscribing in the template and using
 * an `ng-template` else clause to display the loading component
 */
export class LoadingService implements LoadingHandlerService {

  private status$: BehaviorSubject<boolean>;

  constructor() {
    this.status$ = new BehaviorSubject(false);
  }

  getLoading(): Observable<boolean> {
    return this.status$;
  }

  startLoading() {
    this.status$.next(true);
  }

  stopLoading() {
    this.status$.next(false);
  }
}
