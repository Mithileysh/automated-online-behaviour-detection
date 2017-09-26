import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { SideNavComponent }  from '../shared-components/side-nav.component';
import { HeaderComponent }   from '../shared-components/header.component';
import { TimelineComponent } from '../shared-components/timeline.component';

/* Services */
import {
  ISocialSentimentAnalysisResult,
  SocialSentimentAnalysisService,
  SocialSentence
} from '../services/social-sentiment-analysis.service';

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
      "The roads were empty, it was great",
      "I think blue is the best colour in the world",
      "The company provides exceptional customer service. I would recommend them to my friends",
      "I think Romans pizza is the best pizza in South Africa",
      "Nelson Mandela is a role model to many of us, and we should follow in his foot steps",
      "The movie was awesome, definitely worth the money",
      "The application on my phone does everything I need it to, thank you"
    ]
  };

  sentenceListNegative = {
    "sentenceList": [
      "My phones camera does not take great pictures",
      "The event could of been better, what a waste of time",
      "The book was completely boring",
      "The traffic really was bad, the city has to do something about it really soon",
      "Black is a really bad colour for the newborns room",
      "That company’s customer service sucks. I won’t buy anything from them again",
      "Débonnaires makes the worst pizza in South Africa",
      "Adolf Hitler is something we should definitely not role model, he was a murderer",
      "The movies are too expensive nowadays, not worth my money",
      "Your application has too many bugs, uninstalled"
    ]
  };

  sentenceListHateSpeech = {
    "sentenceList": [
      "These monkeys that are allowed to be released on New years Eve And new years day on to public beaches towns etc",
      "From now on I shall address the blacks of south Africa as monkeys as I see the cut little wild monkeys do the same pick drop and litter.",
      "I want to clean this country of all white people. we must act as Hitler did to the Jews.",
      "Queers are an abomination and need to be helped to go straight to Hell!",
      "The Palestinians are beasts walking on two legs.",
      "Now that Trump is president, I'm going to shoot you and all the blacks I can find",
      "The Jews are criminals and our enemies.",
      "Women are like grass, they need to be beaten/cut regularly.",
      "You just need to be raped.",
      "Your Muslim headscarf isn't allowed anymore. Why don’t you tie it around your neck & hang yourself with it"
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

  sentimentAnalysisResults: ISocialSentimentAnalysisResult[];

  loadingPositiveTest = false;
  loadingNegativeTest = false;
  loadingHateSpeechTest = false;
  loadingCyberBullyTest = false;
  loadingCyberStalkTest = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sentimentAnalysisResults = [];
  }

  onDashboardClick($event) {
    $event.preventDefault();
    this.router.navigate(['/dashboard']);
  }

  onBasicSentimentAnalysisClick($event) {
    $event.preventDefault();
    this.router.navigate(['/basic-sentiment-analysis']);
  }

  runSentimentAnalysisTest($event) {
    $event.preventDefault();

    this.runCyberBullyTest();
  }

  runCyberBullyTest() {

    window['Algorithmia']
      .client('simtA9pzwJxBhUzCT4uDXzHbGiS1')
      .algo('algo://nlp/SocialSentimentAnalysis/0.1.4')
      .pipe(this.sentenceListHateSpeech)
      .then((output) => {

          console.log(output);

          if (output.error && output.error === 'API connection error') {

          } else {
            for (let result of output.result) {
              this.sentimentAnalysisResults['push'](
                result
              );
            }
          }

        }
      );
  }
}
