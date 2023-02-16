import { Component } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import {Tweet} from "../share/model/tweet";

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {

  public tweets: Tweet[] =[];

  public constructor(private tweetService: TweetService) {
    this.tweets = this.tweetService.getTweets();
  }
}
