import { Pipe } from 'angular2/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe {
	transform(value: any) {
		return (value) ? value.charAt(0).toUpperCase() + value.toLowerCase().slice(1) : value;
	}
}
