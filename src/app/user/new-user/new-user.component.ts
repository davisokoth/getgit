import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';
import * as uuid from 'uuid4';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  = false;
  email = new FormControl();
  name = new FormControl();
  avatar = new FormControl();
  profile = new FormControl();

  constructor(
    private userService: UserService // , private router: Router, private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  signUp() {
    this.isSubmitted = true;
    const user: User = {
      name: this.name.value,
      email: this.email.value,
      userId: uuid(),
      avatar_url: this.avatar.value,
      profile: this.profile.value
    };
    this.userService.postUser(user);
    // this.router.navigateByUrl('/admin');
  }

}
