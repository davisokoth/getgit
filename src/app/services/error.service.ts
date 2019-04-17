import { Injectable } from '@angular/core';
import {ErrorHandler} from '@angular/core';
// import {UNAUTHORIZED, BAD_REQUEST, FORBIDDEN} from 'http-status-codes';
import {Router} from '@angular/router';
// import {ToastsManager, Toast, ToastOptions} from 'ng2-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = 'An error occurred: Please click this message to refresh';
  static readonly DEFAULT_ERROR_TITLE: string = 'Something went wrong';

  constructor(private router: Router) {}

  public handleError(error: any) {

  }
}
