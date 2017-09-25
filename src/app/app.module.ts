import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';

/* Components */
import { AppComponent }       from './app.component';
import { SideNavComponent }   from './shared-components/side-nav.component';
import { HeaderComponent }    from './shared-components/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';

/* Services */
import { SocialSentimentAnalysisService }  from './services/social-sentiment-analysis.service';

/* Modules */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DashboardComponent,
    BasicSentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ SocialSentimentAnalysisService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
