import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.component";
import {HTTPTestComponent} from "./http-test.component";
import {ChildComponent} from "./child.component";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";
import {jQueryComponent} from "./jquery.component";
import {ControlGroup} from "angular2/common";
import {FirebaseService} from "./firebase.service";


@Component({
  selector: 'my-app',
  template: `
    <h1 class="component">Angular2 Tutorial: Max Schwarzmueller, <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"> Mindspace Youtube Channel</a></h1>
    <div class="component">
      <h2>Exercises in: Databinding, Forms, Routing, Services and ngFor</h2>
      <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['NewContact']">New Contact</a>
      </nav>
      <router-outlet></router-outlet>
    </div>

    <div class="component">
      <h2>Testing GET and POST requests</h2>
      <http-test></http-test>
    </div>

    <div class="component">
      <h2>Angular2 Pipes</h2>
      <h3>Date Pipe</h3>
      <div>
        without pipe: {{date}} <br />
        with pipe: {{date | date:'short'}}
      </div>
      <h3>Number Pipe</h3>
      <div>
        without pipe: {{4.566}} <br />
        with pipe, rounding to 2 digits: {{4.566 | number:'1.2-2'}} <br>
        with pipe, rounding to 4 digits: {{4.566 | number:'1.4-4'}}
      </div>
      <h3>Currency Pipe</h3>
      <div>
        without pipe: {{15.99}} <br />
        with pipe, rounding to 2 digits: {{15.99 | currency:'USD':true:'1.2-2'}} <br>
        with pipe, rounding to 4 digits: {{15.99 | currency:'USD':true:'1.4-4'}}
      </div>
      <h3>Stateful Pipe</h3>
      <div>
        without pipe: {{randomData}} <br>
        with async pipe: {{randomData | async}}
      </div>
    </div>


    <div class="parent">
      <h2>Inputs and Outputs</h2>
      <h3>parent</h3>
      <p>text received from child component: {{childValue}} </p>
      <p>enter text below to send to child component: </p>
      <input type="text" #parentInput (keyup)="0"/><br />
      <div class="child">
        <child [passedValue]="parentInput.value" (childChanged)="childValue = $event"></child>
      </div>
    </div>

    <div class="component">
    <h2>Dependency Injection</h2>
      <section class="parent">
        <my-component-1></my-component-1>
      </section>
      <section class="parent">
        <my-component-2></my-component-2>
    </section>
    </div>
    
    <div class="component">
      <h2>Angular2 + jQuery</h2>
      <my-jquery class="jquery-button"></my-jquery>
    </div>

    <div class="component">
      <div>
       <h2>Angular2 and Firebase:</h2>
       <h2>set a user</h2>
       <form (ngSubmit)="onSubmit(f)" #f="ngForm">
         <div>
           <label for="first-name">first name</label>
           <input type="text" ngControl="firstName">
         </div>
         <div>
           <label for="last-name">last name</label>
           <input type="text" ngControl="lastName">
         </div>
         <button type="submit">submit</button>
       </form>
      </div>

      <div>
       <button (click)="onGetUser()">get user</button>
      </div>

      <div >
       <h2>response: {{response}}</h2>
      </div>
    </div>
  `,
  directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES, ChildComponent, Component1Component, Component2Component, jQueryComponent],
  providers: [FirebaseService]
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent}
  {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent}
])

export class AppComponent {
  response: string;
  childValue: string;
  date = new Date();
  randomData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('the async pipe makes it work!'), 1000);
  });

  constructor(private _firebaseService:FirebaseService) {}

  onSubmit(form: ControlGroup) {
    this._firebaseService.setUser(form.value.firstName, form.value.lastName).subscribe(
      user => this.response = JSON.stringify(user),
        error => console.log(error)
    );
  }

  onGetUser() {
    this._firebaseService.getUser()
      .subscribe(
        user => this.response = JSON.stringify(user),
        error => console.log(error)
    );
  }  
}

