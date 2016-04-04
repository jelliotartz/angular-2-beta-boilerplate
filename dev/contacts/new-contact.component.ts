import {Component, OnInit} from "angular2/core";
import construct from Reflect.construct;
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";

@Component({
	template:`
		<form #myForm="ngForm" (ngSubmit)="onSubmit()">
			<div>
				<label for="first-name">First Name</label>
				<input type="text" id="first-name"
					ngControl="firstName"
					[(ngModel)]="newContact.firstName"
					required
					#firstName="ngForm"
				>
				<span *ngIf="!firstName.valid">Not Valid</span>
			</div>
			<div>
				<label for="last-name">Last Name</label>
				<input type="text" id="last-name"
					ngControl="lastName"
					[(ngModel)]="newContact.lastName"
					required
				>
			</div>
			<div>
				<label for="phone">Phone</label>
				<input type="text" id="phone"
					ngControl="phone"
					[(ngModel)]="newContact.phone"
					required
				>
			</div>
			<div>
				<label for="email">Email</label>
				<input type="text" id="email"
					ngControl="email"
					[(ngModel)]="newContact.email"
					required
				>
			</div>
			<button type="submit" [disabled]="!myForm.form.valid">Create Contact</button>
		</form>
	`,
	providers: [ContactService],
	styles: [`
		label {
			display: inline-block;
			width: 140px;
		}

		input {
			width: 250px;
		}

		.ng-invalid {
			border: 1px solid red;
		}
	`]
})

export class NewContactComponent 
{
	newContact: Contact;

	constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}

	onAddContact(firstName, lastName, phone, email) {
		let contact: Contact = { firstName: firstName, lastName: lastName, phone: phone, email: email };
		this._contactService.insertContact(contact);
		this._router.navigate(['Contacts']); // takes us back to Contacts 
	}

	ngOnInit():any {
		this.newContact = { firstName: '', lastName: this._routeParams.get('lastName'), phone: '', email: '' };
	}

	onSubmit() {
		this._contactService.insertContact(this.newContact);
		this._router.navigate(['Contacts']); // takes us back to Contacts 
	}
}
