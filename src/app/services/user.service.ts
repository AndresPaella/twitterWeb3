import { Injectable } from '@angular/core';
import { User } from '../share/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected users: User[] = [];


  constructor() {
    let user = new User('andy', 'Andy McAllow', 'https://pbs.twimg.com/profile_images/1481281375835725825/rZzCEFm3_400x400.jpg')
   }

   public getUser(id: string) {
    return this.users.filter(user=> user.id === id)[0];
   }
}
