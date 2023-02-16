import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from '../share/model/tweet';
import { User } from '../share/model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService  {

  public newTweets$ = new Subject(); 
  protected  tweets: Tweet[] =[];
  protected user = this.userService.getUser('andy');
  constructor(private userService: UserService) {
    let tweet = new Tweet(new Date(), "Hello World", this.user);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the second tweet", this.user);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the third tweet", this.user);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the fourth tweet", this.user);
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
    this.newTweets$.next(true);
  }

}
