import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User = {
    id: null,
    login: '',
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    received_events_url: '',
    type: '',
    score: 0,
    followers: 0
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserFollowers(this.user.login)
    .subscribe(
      data => this.user.followers = data.length,
      error => console.log(error)
    );
  }

}
