import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User = {
    userId: null,
    login: '',
    avatar_url: '',
    url: '',
    repo_url: '',
    type: '',
    score: 0,
    followers: 0,
    name: '',
    email: '',
    profile: ''
  };

  interests = ['angular', 'nodejs', 'serverless', 'azure', 'testing'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUserFollowers();
  }

  getUserFollowers() {
    this.userService.getUserFollowers(this.user.login).subscribe(
      data => this.user.followers = data.length,
      error => console.log(error)
    );
  }

}
