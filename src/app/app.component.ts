import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

/* Services */
import {
  ISocialSentimentAnalysisResult,
  SocialSentimentAnalysisService,
  SocialSentence
} from './services/social-sentiment-analysis.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SocialSentimentAnalysisService]
})
export class AppComponent implements OnInit {
  title = 'Automate Online Behavior Detection';

  playgroudnResults: ISocialSentimentAnalysisResult[];

  constructor(
    private router: Router,
    private socialSentimentAnalysisService: SocialSentimentAnalysisService
  ) { }

  ngOnInit(): void {
    this.playgroudnResults = [];
  }

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }

  onPlaygroundClick($event) {
    $event.preventDefault();

    const input = {
      'sentence': 'iPhones are the best cellular phones!'
    };
    window['Algorithmia'].client('simtA9pzwJxBhUzCT4uDXzHbGiS1')
      .algo('algo://nlp/SocialSentimentAnalysis/0.1.4')
      .pipe(input)
      .then((output) => {
        console.log(output);

        if (output.error === 'API connection error') {

        } else {

          this.playgroudnResults['push'](

            output.result[0]

          );
        }


      });


  }
}
