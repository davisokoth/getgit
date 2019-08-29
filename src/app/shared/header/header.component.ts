import { Component, OnInit } from '@angular/core';
import { faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  siteName = 'Code Reviews | We got your back :)';
  faHome = faHome;
  faUserPlus = faUserPlus;
  constructor() { }

  ngOnInit() {
  }

}
