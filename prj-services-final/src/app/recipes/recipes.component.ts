import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // Declares a variable 'selected recipe' of type 'Recipe Object'
  selectedRecipe: Recipe;
  // Calls an instance of Recipe service. Local to this component and all below?
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // .subcribe does something here. Still not sure exactly what.
    // Appears to be listening to the service.
    // recipeSelected.subscribe() listens to the recipe.service.ts
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
