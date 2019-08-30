import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  = false;
  email = new FormControl();
  password = new FormControl();

  response$: Observable<User>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.isSubmitted = true;
    const user: User = {
      password: this.password.value,
      email: this.email.value
    };
    this.response$ = this.userService.login(user);
    this.clearForm();
  }

  clearForm() {
    this.email.setValue(null);
    this.password.setValue(null);
  }

}
