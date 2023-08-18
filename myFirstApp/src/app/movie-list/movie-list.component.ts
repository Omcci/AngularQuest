import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],

  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(500)]),
    ]),
  ],
})
export class MovieListComponent {
  movies = [
    { name: 'The Godfather [Film Series]' },
    { name: 'Casablanca (1942)' },
    { name: 'Its a Wonderful Life (1946)' },
    { name: 'Schindlers List (1993)' },
    { name: 'Star Wars [Film Series]' },
    { name: 'Rear Window (1954)' },
    { name: 'Citizen Kane (1941)' },
  ];
  showMoviesValue = true; //

  isFirst(index: number): boolean {
    return index === 0;
  }

  toggleMoviesDisplay() {
    this.showMoviesValue = !this.showMoviesValue;
  }
}
