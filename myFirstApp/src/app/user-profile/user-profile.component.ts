import { Component, OnInit } from '@angular/core';
import { User } from './user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User

  constructor() { 
    this.user = new User('Doe', 'John', 25, 'https://randomuser.me/api/portraits/lego/2.jpg');

  }

  ngOnInit(): void {
  }

   toggleAge(): void  {
    this.user.showAge = !this.user.showAge
  }

}
