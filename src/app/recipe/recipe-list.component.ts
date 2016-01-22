import {Component} from 'angular2/core';

import {RecipeService} from '../recipe/recipe.service';
import {RecipeComponent} from '../recipe/recipe.component';

@Component({
	selector: 'recipe-list',
	styles: [
		`.list-group { margin: 30px 0; max-width: 75%; }`
	],
	directives: [RecipeComponent],
	providers: [RecipeService],
	template: `<div class="">
					<ul class="list-group">
						<li class="list-group-item" *ngFor="#recipe of recipes">
							<recipe [recipe]="recipe"></recipe>
						</li>
					</ul>

					<!-- <input type="text" class="form-control" placeholder="Recipe Name" [(ngModel)]="recipe.name"/> 
					<button class="btn btn-raised btn-info" (click)="addRecipe()">Create Recipe</button> -->
				</div>`
})

export class RecipeListComponent {
	recipe
	recipes
	constructor(private recipeService: RecipeService) {
		this.recipes = [];
		this.recipe = {
			name: ''
		};
	}
	// Angular ngOnInit Lifecycle Hook
	ngOnInit() {
		this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
	}

	addRecipe() {
		this.recipes.push(this.recipe);
		this.recipe = {};
	}
}