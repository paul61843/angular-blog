import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  @Input() options = {
    type: 'icon',
    image: '',
    height: '50px',
  };

  constructor() {}

  ngOnInit(): void {}
}
