import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../../models/search-result.model';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = environment.URL;
  apiLink = environment.apiLink;

  constructor(
    private http: HttpClient,
    // private nService: NotificationHandlerService
  ) {}

  /** GET users from git api */
  getUsers(query: string, pageNo: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.apiLink}GetUsers`);
  }

  getAllUsers(): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.apiLink}GetUsers`);
  }

  /** GET number of user's followers */
  getUserFollowers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`);
  }

  postUser(user: User) {
    return this.http.post(`${this.apiLink}AddUser`, user);
  }

  login(user: User) {
    return this.http.post(`${this.apiLink}LogUser`, user);
  }
}
