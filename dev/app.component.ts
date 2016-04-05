import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.component";
import {HTTPTestComponent} from "./http-test.component";
import {ChildComponent} from "./child.component";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";


@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['NewContact']">New Contact</a>
      </nav>
    </header>

    <div class="main">
      <router-outlet></router-outlet>
      <http-test></http-test>
      <div class="pipes">
        <h2>Date Pipe</h2>
        <div>
          without pipe: {{date}} <br />
          with pipe: {{date | date:'short'}}
        </div>
        <h2>Number Pipe</h2>
        <div>
          without pipe: {{4.566}} <br />
          with pipe, rounding to 2 digits: {{4.566 | number:'1.2-2'}} <br>
          with pipe, rounding to 4 digits: {{4.566 | number:'1.4-4'}}
        </div>
        <h2>Currency Pipe</h2>
        <div>
          without pipe: {{15.99}} <br />
          with pipe, rounding to 2 digits: {{15.99 | currency:'USD':true:'1.2-2'}} <br>
          with pipe, rounding to 4 digits: {{15.99 | currency:'USD':true:'1.4-4'}}
        </div>
        <h2>Stateful Pipe</h2>
        <div>
          without pipe: {{randomData}} <br>
          with async pipe: {{randomData | async}}
        </div>
      </div>
    </div>

    <div class="parent">
      <h1>parent</h1>
      <p>text received from child component: {{childValue}} </p>
      <p>enter text below to send to child component: </p>
      <input type="text" #parentInput (keyup)="0"/><br />
      <div class="child">
        <child [passedValue]="parentInput.value" (childChanged)="childValue = $event"></child>
      </div>
    </div>

    <section class="component">
      <my-component-1></my-component-1>
    </section>
    <section class="component">
      <my-component-2></my-component-2>
    </section>

  `,
  directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES, ChildComponent, Component1Component, Component2Component],
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent}
  {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent}
])

export class AppComponent {
  childValue: string;
  date = new Date();
  randomData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('the async pipe makes it work!'), 1000);
  });
}

