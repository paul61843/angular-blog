import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  headerOptions = {
    type: 'text',
    image: '',
    height: '50px',
  };

  constructor() {}

  ngOnInit(): void {}
}
