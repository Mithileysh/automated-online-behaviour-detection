import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { SideNavComponent }  from '../shared-components/side-nav.component';
import { HeaderComponent }   from '../shared-components/header.component';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'basic-sentiment-analysis',
  templateUrl: './basic-sentiment-analysis-page.template.html',
  entryComponents: [
    SideNavComponent,
    HeaderComponent
  ]
})
export class BasicSentimentAnalysisComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }
}
