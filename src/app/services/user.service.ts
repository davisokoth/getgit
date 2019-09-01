import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
// import { NotificationHandlerService } from 'src/app/services/notification-handler.service';
import { SearchResult } from '../shared/models/git-result.model';

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
  getUsers(query: string, pageNo: number) : Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.apiLink}GetUsers`);
  }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`);
  }

  /** GET number of user's followers */
  getUserFollowers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`);
  }

  postUser(user: User) {
    const model = {
      userId: user.userId,
      email: user.email,
      name: user.name,
      avatar_url: user.avatar_url,
      profile: user.profile
    };
    return this.http.post(`${this.apiLink}AddUser`, model);
  }

  login(user: User) {
    return this.http.post(`${this.apiLink}LogUser`, user);
  }
}
