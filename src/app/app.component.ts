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

}
