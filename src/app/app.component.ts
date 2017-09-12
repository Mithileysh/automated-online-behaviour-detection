import { Component } from '@angular/core';

import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [BasicSentimentAnalysisComponent]
})
export class AppComponent {
  title = 'Automate Online Behavior Detection';
}
