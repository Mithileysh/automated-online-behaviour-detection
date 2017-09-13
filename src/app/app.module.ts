import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

import { SocialSentimentAnalysisService, SocialSentence, SocialSentenceList } from './services/social-sentiment-analysis.service';


@NgModule({
  declarations: [
    AppComponent,
    BasicSentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'positive-negative-sa',
        component: BasicSentimentAnalysisComponent
      }
    ])
  ],
  providers: [ SocialSentimentAnalysisService ],
  bootstrap: [
    AppComponent,
    BasicSentimentAnalysisComponent
  ]
})
export class AppModule { }
