import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


User = [
  { Option: 'China',         nr: 1379510000 },
  { Option: 'India',         population: 1330780000 },
  { Option: 'United States', population:  324788000 },
  { Option: 'Indonesia',     population:  260581000 },
  { Option: 'Brazil',        population:  206855000 },
];
  constructor() { }

  ngOnInit() {}


}
