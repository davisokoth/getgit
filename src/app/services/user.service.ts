import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { NotificationHandlerService } from 'src/app/services/notification-handler.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = environment.URL;
  apiLink = environment.apiLink;

  constructor(
    private http: HttpClient,
    private nService: NotificationHandlerService
  ) {}

  /** GET users from git api */
  getUsers(query: string, pageNo: number) {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`)
    .pipe(map(res => {
      return res.map(item => {
        return new User(item.userId, item.name, item.email, item.profile, item.avatar_url, item.score = 0);
      });
    }));
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
    return this.http.post(`${this.apiLink}AddUser`, model)
    .subscribe(
      (data: User) => {
        this.nService.handleError(data[0] + ' created successfully');
      },
      error => error
    );
  }
}
