import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitResult } from '../models/git-result.model';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url = environment.URL;
  constructor(private http: HttpClient) {}

  /** GET users from git api */
  getGitUsers (query: string, pageNo: number): Observable<GitResult> {
    return this.http.get<GitResult>(`${this.url}search/users?q=${query}&page=${pageNo}`);
  }

  /** GET number of user's followers */
  getUserFollowers (query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users/${query}/followers`);
  }
}
