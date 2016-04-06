import {Component, ElementRef, OnInit} from "angular2/core";
declare var jQuery: any;

//component decorator
@Component({
	selector: 'my-jquery',
	template:`
		<button>jQuery + Angular2 = possible!</button>
	`
})
// class component
export class jQueryComponent {
	constructor(private _elRef: ElementRef) {} // this INJECTS a reference to this component in the DOM.
	ngOnInit():any {
		jQuery(this._elRef.nativeElement).find('button').on('click', function() {
			alert('this is a jQuery click event added to Angular2!')
		});
	}
}
