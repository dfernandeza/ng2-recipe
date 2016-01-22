import { Component } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/common';

import { HighlightDirective } from '../directives/highlight.directive';
import { RecipeService } from '../recipe/recipe.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

// Class decorator
@Component({
	selector: 'recipe-detail',
	styles: [
		`.rcp { margin: 15px 0; }
		 .rcp form { margin: 100px 0 0; }
		 .help-block { display: block; }
		 .help-block[hidden] { display: none; }`
	],
	directives: [RouterLink, FORM_DIRECTIVES, CORE_DIRECTIVES, HighlightDirective],
	pipes: [CapitalizePipe],
	providers: [RecipeService],
	template: `<div class="rcp clearfix">
					<h3><i class="material-icons">&#xEB49;</i> {{recipe.name}}</h3> 

					<ul>
						<li *ngFor="#ingredient of recipe.ingredients">
							<span highlight>{{ingredient | capitalize}}</span>
						</li>
					</ul>
					
					<form id="ingredient-form" #form="ngForm">
						<div class="form-group label-floating" [ngClass]="{'has-error': !form.valid}">
							<label for="name" class="control-label">Ingredient name</label>
							<input id="name" type="text" class="form-control" required [(ngModel)]="ingredient.name" ngControl="name" #name="ngForm"/>
							<span class="help-block" [hidden]="name.valid">*required</span> 
						</div>
						<button class="btn btn-raised btn-primary" [disabled]="!form.valid" (click)="addIngredient()">Add an ingredient</button>
					</form>

					<button class="btn btn-raised btn-info pull-right" [routerLink]="['Recipes']">Back</button>
				</div>`	
})
export class RecipeDetailComponent {
	ingredient
	recipe
	constructor(private recipeService: RecipeService, private routeParams: RouteParams) {
		this.ingredient = { name: '' };
		this.recipe = { name: '' };
	}

	ngOnInit() {
		this.recipeService.getRecipe(this.routeParams.get('id')).subscribe(recipe => {
			this.recipe = recipe; 
		});
	}

	addIngredient() {
		this.recipe.ingredients.push(this.ingredient.name);
		this.ingredient = {};
	}
}
