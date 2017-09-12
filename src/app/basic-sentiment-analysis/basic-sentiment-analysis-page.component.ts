import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-basic-sentiment-analysis',
  templateUrl: './basic-sentiment-analysis-page.template.html'
})
export class BasicSentimentAnalysisComponent implements OnInit {

  ngOnInit(): void {

    const input = {
      'sentence': 'This old product sucks! But after the update it works like a charm!'

    };
    window['Algorithmia'].client('simtA9pzwJxBhUzCT4uDXzHbGiS1')
      .algo('algo://nlp/SocialSentimentAnalysis/0.1.4')
      .pipe(input)
      .then(function(output) {
        console.log(output);
      });
  }
}
