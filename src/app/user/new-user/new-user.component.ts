import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
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

  constructor(
    private userService: UserService, private router: Router, private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  signUp() {
    this.isSubmitted = true;
    const user: User = {
      name: this.name.value,
      email: this.email.value,
      id: uuid()
    }
    this.userService.postUser(user)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    // this.router.navigateByUrl('/admin');
  }

}
