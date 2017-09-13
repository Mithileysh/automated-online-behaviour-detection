import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }                    from './app.component';
import { BasicSentimentAnalysisComponent } from './basic-sentiment-analysis/basic-sentiment-analysis-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: AppComponent },
  { path: 'basic-sentiment-analysis', component: BasicSentimentAnalysisComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
