import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives-quest',
  templateUrl: './directives-quest.component.html',
  styleUrls: ['./directives-quest.component.css']
})
export class DirectivesQuestComponent implements OnInit{

  isAdmin: boolean = false;

  constructor() {
    

  }

  ngOnInit(): void {
  }

  toggleAdmin(): void {
    this.isAdmin = !this.isAdmin
  }

}
