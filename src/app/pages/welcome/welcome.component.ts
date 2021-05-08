import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  welcome = {
    title: 'Hello & Welcome',
    sub: 'Whatever is worth doing is worth doing well.',
  };

  content = {
    title: 'We are glad you see my blog!',
    sub: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitatio.`,
  };

  constructor() {}

  ngOnInit(): void {}
}
