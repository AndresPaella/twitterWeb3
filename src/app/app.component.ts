import { Component } from '@angular/core';
import {Tweet} from "./share/model/tweet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

  public tweets: Tweet[] =[];

  public constructor() {
    let tweet = new Tweet(new Date(), "Hello World", "Andy McAllow", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the second tweet", "Andy McAllow", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the third tweet", "Andy McAllow", 0, [], [], []);
    this.tweets.push(tweet);
    tweet = new Tweet(new Date(), "This is the fourth tweet", "Andy McAllow", 0, [], [], []);
    this.tweets.push(tweet);

  }


}
