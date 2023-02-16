import { Injectable } from '@angular/core';
import { Tweet } from '../share/model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  protected  tweets: Tweet[] =[];
  constructor() {
    let tweet = new Tweet(new Date(), "Hello World", "Andy McAllow");
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the second tweet", "Andy McAllow");
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the third tweet", "Andy McAllow");
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the fourth tweet", "Andy McAllow");
    this.tweets.push(tweet);
   }

  public getTweets() {
    let returnValue: Tweet[]= [];
    this.tweets.forEach(tweet=>{
        returnValue.push(tweet)
    })
    return returnValue;
  }

  public publishTweet(tweet: Tweet) {
    this.tweets.unshift(tweet);
  }

}
