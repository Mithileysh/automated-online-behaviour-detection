import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { SideNavComponent }  from '../shared-components/side-nav.component';
import { HeaderComponent }   from '../shared-components/header.component';
import { TimelineComponent } from '../shared-components/timeline.component';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'basic-sentiment-analysis',
  templateUrl: './basic-sentiment-analysis-page.template.html',
  entryComponents: [
    SideNavComponent,
    HeaderComponent,
    TimelineComponent
  ]
})
export class BasicSentimentAnalysisComponent implements OnInit {

  sentenceListPositive = {
    "sentenceList": [
      "The camera on my phone takes great pictures",
      "That was an awesome event",
      "The book I read was so good and spine-chilling",
      "The roads were empty, it was great"
    ]
  };

  sentenceListNegative = {
    "sentenceList": [
      "My phones camera does not take great pictures",
      "The event could of been better, what a waste of time",
      "The book was completely boring",
      "The traffic really was bad, the city has to do something about it really soon"
    ]
  };

  sentenceListHateSpeech = {
    "sentenceList": [
      "These monkeys that are allowed to be released on New years Eve And new years day on to public beaches towns etc",
      "From now on I shall address the blacks of south Africa as monkeys as I see the cut little wild monkeys do the same pick drop and litter.",
      "I want to clean this country of all white people. we must act as Hitler did to the Jews."
    ]
  };

  sentenceListCyberBullying = {
    "sentenceList": [
      "I’m going to kill you",
      "You are not worth anything",
      "Your are worthless. You are just on Facebook to get attention",
      "You are ugly",
      "I can’t believe I have seen anyone this ugly",
      "No one likes you, you know…",
      "There’s no reason for you to live",
      "No one wants to be your friend, loser!",
      "You are ugly and fat. You have no friends and no one will ever love you. Why do you even bother coming to school anymore freak",
      "She is ugly and fat!, We all know you have no friends"
    ]
  };

  sentenceListCyberStalking = {
    "sentenceList": [
      "Let’s make this simple. You have until noon. I am not bluffing. Don’t be stupid. Once I send pics of you they cannot be unsent.",
      "",
      ""
    ]
  };

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
