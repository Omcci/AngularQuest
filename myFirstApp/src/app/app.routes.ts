import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'movie', component: MovieListComponent },
  { path: 'cocktail', component: CocktailListComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Route par défaut qui redirige vers "user"
  { path: '**', redirectTo: '/user' },
];

export { ROUTES };
