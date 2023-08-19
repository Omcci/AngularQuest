// src/app/user/user.component.ts

import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  address = new FormControl('');

  changeUsername() {
    this.username.setValue('kitten69');
  }
}