import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

// Class decorator
@Component({
	selector: 'recipe',
	styles: [
		`.rcp { margin: 30px 0; }`
	],
	directives: [RouterLink],
	template:  `<div class="rcp">
					<div class="row-content">
						<h4 class="list-group-item-heading">{{recipe.name}}</h4>
					</div>
					<div class="pull-right">
						<a class="btn btn-warning btn-fab" [routerLink]="['RecipeDetail', {id: recipe.id}]">
							<i class="material-icons">&#xEB47;</i>
						</a>
					</div>
				</div>`,
	inputs: ['recipe']
})
export class RecipeComponent {}
