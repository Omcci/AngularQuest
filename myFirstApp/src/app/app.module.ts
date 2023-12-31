import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesQuestComponent } from './directives-quest/directives-quest.component';
import { HighlightDirective } from './highlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DirectivesQuestComponent,
    HighlightDirective,
    ShowMoviesDirective,
    MovieListComponent,
    MenuComponent,
    CocktailListComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
