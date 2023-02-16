import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TweetService } from '../services/tweet.service';
import {Tweet} from "../share/model/tweet";

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnDestroy {

  protected  subscriptions: Subscription[] =[];
  public tweets: Tweet[] =[];

  public constructor(private tweetService: TweetService) {
    this.tweets = this.tweetService.getTweets();

    this.subscriptions.push(this.tweetService.newTweets$.subscribe(()=>this.tweets = this.tweetService.getTweets()))
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s=>s.unsubscribe)
  }
}
