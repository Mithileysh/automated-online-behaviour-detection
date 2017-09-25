import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'basic-sentiment-analysis', component: BasicSentimentAnalysisComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
