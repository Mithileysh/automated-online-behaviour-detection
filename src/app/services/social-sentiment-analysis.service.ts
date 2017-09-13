import { Injectable } from '@angular/core';

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

  }

  getSentimentOfSentenceList(sentenceList: SocialSentenceList) {

  }
}
