import { Injectable } from '@angular/core';

export interface ISocialSentimentAnalysisResult {
  sentence: string;
  positive: number;
  negative: number;
  neutral: number;
  compound: number;
}

export class SocialSentence {

  private sentence: string;

  SocialSentence(sentence: string) {
    this.sentence = sentence;
  }
}

export class SocialSentenceList {

  private sentenceList: string[];

  SocialSentenceList(sentenceList: string[]) {
    this.sentenceList = sentenceList;
  }
}

@Injectable()
export class SocialSentimentAnalysisService {

  getSentimentOfSentence(sentence: SocialSentence) {
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

  getSentimentOfSentenceList(sentenceList: SocialSentenceList) {
    const input = {
      'sentence': 'This old product sucks! But after the update it works like a charm!'

    };
    window['Algorithmia'].client('simtA9pzwJxBhUzCT4uDXzHbGiS1')
      .algo('algo://nlp/SocialSentimentAnalysis/0.1.4')
      .pipe(input)
      .then(function(output) {
        console.log(output);

        return output;
      });
  }
}
