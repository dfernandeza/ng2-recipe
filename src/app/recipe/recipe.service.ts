import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
	recipes 
	
	// This is not JS syntax
	constructor(private http: Http) {}

	getRecipes() {
		// The new HTTP service returns an Observable thats why we need to 
		// call map on the response observable to get the parsed response objects
		return this.http.get('/fixtures/recipes.json').map(res => {
			this.recipes = res.json();
			return res.json();
		});
	}

	getRecipe(id) {
		return this.http.get('/fixtures/recipes.json').map(res => { 
			return res.json().filter(r => r.id == id)[0];
		});
	}
}
