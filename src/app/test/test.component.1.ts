import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title: String = "Bonjour";

  voiture: Object={
    nom:'dacia',
    couleur:'rouge'
  }
  voiture2: Object={
    nom:'citroen',
    couleur:'bleu'
  }
  voiture3: Object={
    nom:'mini',
    couleur:'jaune'
  }

  garage: any[] = [this.voiture, this.voiture2, this.voiture3]; // Un tableaux typé

  comments=[
    {date:new Date(), message: "A"},
    {date:new Date(), message: "B"},
    {date:new Date(), message: "C"},
  ]
  
  comment={date:null,message:""};

  /*addComment() {
    this.comment.date=new Date();
    this.comments.push(this.comment);
    this.comment={date:null,message:""};
  }*/
  addComment(c) {
    c.date=new Date();
    this.comments.push(c);
    this.comment.message="";
  }

  constructor() { }

  ngOnInit() {
  }

}
