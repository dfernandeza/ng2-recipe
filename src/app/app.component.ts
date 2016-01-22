import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { RecipeListComponent } from './recipe/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail.component';

@Component({
	selector: 'app',
	styles: [``],
	directives: [ROUTER_DIRECTIVES],
	template: `<div class="jumbotron">
					<h1>Angular 2 Example <i class="material-icons">&#xE556;</i></h1>
					<!-- Routed views go here -->
					<router-outlet></router-outlet>
				</div>`
})
@RouteConfig([
	{ path: '/', as: 'Recipes', component: RecipeListComponent, useAsDefault: true },
	{ path: '/recipes/:id', as: 'RecipeDetail', component: RecipeDetailComponent }
])
export class AppComponent {}
