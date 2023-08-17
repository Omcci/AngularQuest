// cocktail.service.ts
import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model'; 

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  
  private cocktails: Cocktail[] = [
    new Cocktail('Mojito', 7.5, 'https://unsplash.com/photos/gtDYwUIr9Vg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bW9qaXRvfGZyfDB8fHx8MTY5MjI3ODc2M3ww&force=true'),
    new Cocktail('Gin Tonic', 9.5, 'https://unsplash.com/photos/iL868JAIupY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Z2luJTIwdG9uaWN8ZnJ8MHx8fHwxNjkyMjg0NjkzfDA&force=true'),
    // Ajoutez d'autres cocktails si vous le souhaitez
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails.slice();
  }
}
