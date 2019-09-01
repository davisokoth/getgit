import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class LoadingHandlerService {

  constructor() { }

  abstract startLoading();

  abstract stopLoading();

  abstract getLoading(): Observable<boolean>;
}
