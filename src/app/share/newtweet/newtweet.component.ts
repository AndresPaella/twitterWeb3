import {Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TweetService } from 'src/app/services/tweet.service';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'newtweet',
  templateUrl: './newtweet.component.html',
  styleUrls: ['./newtweet.component.scss']
})
export class NewTweetComponent {
    public form: FormGroup;

    public constructor (
        public formBuilder: FormBuilder,
        public tweetService: TweetService
    ) {
        this.form = this.formBuilder.group({
            tweetcontent:[null, [Validators.max(140)]]

        })   

    }

    public submit() {
        if(this.form.valid) {
            let tweetcontent = this.form.get('tweetcontent')?.value;
            let tweet = new Tweet(new Date(), tweetcontent, 'Andy' );
            this.tweetService.publishTweet(tweet);
        }
    }
}