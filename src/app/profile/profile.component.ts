import { AfterViewInit, Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
import { Subscription } from 'rxjs';
import { TweetService } from '../share/tweetservice/tweet.service';
import { Web3Service } from '../share/web3service/web3.service';
import { UserService } from '../share/tweetservice/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  public tweets: Tweet[] =[];
  public user: any;
  public subscriptions: Subscription[] = new Array<Subscription>();

  public subscription: Subscription = new Subscription();
  public isUserConnected: boolean = false;

  
  profile: UserProfile | undefined;
  isEditing = false;

  public constructor(
    private tweetService: TweetService, 
    private userService: UserService, 
    private web3Service: Web3Service,
    private modalService: NgbModal) 
  {
    this.web3Service.userConected$.subscribe((status: boolean) => 
    {
      this.user = this.userService.getUserInSession();
      this.loadTweets();
      this.user = this.tweets[0].author;
    });
  }

  ngAfterViewInit()
  {
    this.user = this.userService.getUserInSession();
    this.loadTweets();
  }

  private loadTweets()
  {
    this.tweetService.getMyTweets().then((tweets: Tweet[]) => 
    {
      this.tweets = tweets;
    });

    this.subscription = this.tweetService.newTweets$.subscribe(async () => 
    {
      this.tweets = await this.tweetService.getMyTweets();
    });
  }

  public ngOnDestroy() {
    //this.subscriptions.forEach(subscription => { subscription.unsubscribe(); });
    this.subscription.unsubscribe();
  }

  openDialog(): void 
  {
    this.modalService.open(EditProfileComponent);
  }


  ngOnInit() {
    this.profile = {
      name: this.user.name,
      handle: '@'+ this.user.name,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus commodo tellus, a lacinia libero luctus sit amet. ',
      avatarUrl: 'https://via.placeholder.com/150',
    };
  }

  onEdit() {
    this.isEditing = true;
  }

  onSave(newProfile: UserProfile) {
    // Actualizar datos del perfil
    this.profile = newProfile;
    this.user.name = newProfile.name;
    this.user.avatar = newProfile.avatarUrl;
    this.user.bio = newProfile.bio;
    this.userService.updateUser(this.user);
    this.isEditing = false;
  }

  onCancel() {
    this.isEditing = false;
  }
}
