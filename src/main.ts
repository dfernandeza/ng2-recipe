import { bootstrap }    from 'angular2/platform/browser';
import { bind } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { AppComponent } from './app/app.component';

document.addEventListener('DOMContentLoaded', function main() {
	bootstrap(AppComponent, [
		ROUTER_PROVIDERS, 
		HTTP_PROVIDERS, 
		// The location strategy defines how the application will interact with browser's URL. 
		// We use HashLocationStrategy, which means that if we configure the router with the fragment '/recipe', 
		// Angular will add the hash sign and this fragment to the base URL.
		bind(LocationStrategy).toClass(HashLocationStrategy)
	]);
});
