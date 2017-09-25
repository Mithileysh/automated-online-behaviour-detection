import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { SideNavComponent }  from '../shared-components/side-nav.component';
import { HeaderComponent }   from '../shared-components/header.component';

/* Services */
import {
  ISocialSentimentAnalysisResult,
  SocialSentimentAnalysisService,
  SocialSentence
} from '../services/social-sentiment-analysis.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  entryComponents: [
    SideNavComponent,
    HeaderComponent
  ],
  providers: [SocialSentimentAnalysisService]
})
export class DashboardComponent implements OnInit {

  title = 'Automate Online Behavior Detection';

  playgroundLoading = false;
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

    this.playgroundLoading = true;

    let playgroundSentence = jQuery('#input-sa-playground').val();

    if (!playgroundSentence) {
      playgroundSentence = 'iPhones are the best cellular phones!';
    }

    const input ={
      'sentence': playgroundSentence
    };

    window['Algorithmia']
      .client('simtA9pzwJxBhUzCT4uDXzHbGiS1')
      .algo('algo://nlp/SocialSentimentAnalysis/0.1.4')
      .pipe(input)
      .then((output) => {

          console.log(output);

          this.playgroundLoading = false;

          if (output.error && output.error === 'API connection error') {

          } else {

            this.playgroudnResults['push'](
              output.result[0]
            );
          }

        }
      );
  }
}
