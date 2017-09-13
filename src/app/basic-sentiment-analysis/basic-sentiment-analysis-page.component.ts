import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'basic-sentiment-analysis',
  templateUrl: './basic-sentiment-analysis-page.template.html'
})
export class BasicSentimentAnalysisComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }
}
