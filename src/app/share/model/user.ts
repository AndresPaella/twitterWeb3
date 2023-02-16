import { Tweet } from "./tweet";


export class User {
    protected _id: string;
    set id(value:any) {
      this._id=value;
    }
    protected _name: string;
    set name(value:any) {
      this._id=value;
    }
    protected _picture: string;
    set picture(value:any) {
      this._id=value;
    }
    protected tweets: Tweet[];
    protected followers: User[];
    protected following: User[];
  
    constructor(id: string, name: string, picture: string) {
      this._id = id;
      this._name = name;
      this._picture = picture;
      this.tweets = [];
      this.followers =  [];
      this.following =  [];
    }
  
  }
  