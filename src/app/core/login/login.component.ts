import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  isSubmitted  = false;

  response$: Observable<User>;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() { }

  login() {
    this.isSubmitted = true;
    const user: User = {
      password: this.loginForm.get('password').value,
      email: this.loginForm.get('email').value
    };
    this.response$ = this.userService.login(user);
    this.clearForm();
  }

  clearForm() {
    this.loginForm.reset();
  }

}
