import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
	selector: 'child',
	template: `
	<h2>child</h2>
	<p>value received from parent component: {{parentValue}}</p>
	<p>enter input below to send to parent component</p>
	<input type="text" #childInput (keyup)="onChange(childInput.value)"/><br />
	`,
	inputs: ['parentValue:passedValue'], // note use of ALIAS for passedValue/parentValue
	// outputs: ['childChanged'] this is replaced by adding @output in class ChildComponent
})

export class ChildComponent {
	parentValue: string;
	@Output() childChanged = new EventEmitter<string>();

	onChange(value: string) {
		this.childChanged.emit(value); // this value is accessible via $event
	}
}