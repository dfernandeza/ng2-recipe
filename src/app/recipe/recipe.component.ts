import { Component, EventEmitter } from 'angular2/core';
import { RouterLink } from 'angular2/router';

// Class decorator
@Component({
	selector: 'recipe',
	styles: [
		`.rcp { margin: 30px 0; }
		 .btn.btn-fab { height: 40px; width: 40px; min-width: 40px; margin-right: 4px; }`
	],
	directives: [RouterLink],
	template:  `<div class="rcp">
					<div class="row-content">
						<h4 class="list-group-item-heading">{{recipe.name}}</h4>
					</div>
					<div class="pull-right">
						<a class="btn btn-info btn-fab" [routerLink]="['RecipeDetail', {id: recipe.id}]" title="Detail">
							<i class="material-icons">&#xEB47;</i>
						</a>
						<a class="btn btn-danger btn-fab" title="Delete" (click)="deleteRecipe($event)">
							<i class="material-icons">&#xE92B;</i>
						</a>
					</div>
				</div>`,
	inputs: ['recipe'],
	outputs: ['byebyeRecipe']
})
export class RecipeComponent {
	recipe
	byebyeRecipe = new EventEmitter()

	deleteRecipe(e) {
		this.byebyeRecipe.next(this.recipe.id);
	}
}
