import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitResult } from '../shared/models/git-result.model';
import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = environment.URL;
  apiLink = environment.apiLink;

  constructor(private http: HttpClient) {}

  /** GET users from git api */
  getUsers(query: string, pageNo: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`);
  }

  /** GET number of user's followers */
  getUserFollowers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}GetUsers`);
  }

  postUser(user: User) {
    const model = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    return this.http.post(`${this.apiLink}AddUser`, model);
  }
}
