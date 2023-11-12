import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  selectedLanguage: []=[];
  comments: string
  ngOnInit(){
    this.selectedLanguage = history.state.checkArray
    this.comments = history.state.comments
  }

}
