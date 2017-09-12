import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicSentimentAnalysisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, BasicSentimentAnalysisComponent]
})
export class AppModule { }
