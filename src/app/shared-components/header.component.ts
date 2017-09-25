import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html'
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }


}
