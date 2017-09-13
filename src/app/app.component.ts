import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Automate Online Behavior Detection';

  constructor(
    private router: Router
  ) { }

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }
}
