import { Component, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  
  @Input() opn=[
    {date:new Date(), message: "A"},
    {date:new Date(), message: "B"},
    {date:new Date(), message: "C"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
