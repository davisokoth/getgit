import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detai',
  templateUrl: './user-detai.component.html',
  styleUrls: ['./user-detai.component.css']
})
export class UserDetaiComponent implements OnInit {

  login: string;
  user: User = {
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

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const login = params['login'];
      this.getUser(login);
    });
  }

  getUser(login: string) {
    this.userService.getUserFollowers(login)
    .subscribe(
      data => {
        if (data) {
          console.log(data);
          this.user.followers = data.length;
        } else {
          this.user.followers = 0;
        }
      },
      error => console.log(error)
    );
  }

}
