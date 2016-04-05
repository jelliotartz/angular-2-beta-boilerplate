import {Component} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
	selector: 'my-component-2',
	template:`
	<h1>Component 2</h1>
	<div>
		<button (click)="onGetData()">get random data</button>
		<p>random data: {{data}}</p>
		<input type="text" #input>
		<button (click)="onAddItem(input.value)">add</button>
	</div>
	`,
})

export class Component2Component {
	data: string;

	constructor(private _dataService: DataService) { } // this INJECTS DataService

	onGetData() {
		this.data = this._dataService.getRandomData();
	}

	onAddItem(data: string) {
		this._dataService.insertData(data)
	}
}

