import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

/* Services */
import { SocialSentimentAnalysisService } from './services/social-sentiment-analysis.service';

/* Modules */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicSentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SocialSentimentAnalysisService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
