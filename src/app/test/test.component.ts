import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  comment = { date: null, message: "" };
  comments=[];
  /*private testService:TestService*/
  constructor(private testService: TestService) {
    /*this.testService=TestService;*/
    this.comments=this.testService.getAllComments();
  }
  addComment(c) {
    this.testService.addComment(c);
    this.comment = { date: null, message: "" };
    this.comments=this.testService.getAllComments();
  }
  ngOnInit() {
  }

}
