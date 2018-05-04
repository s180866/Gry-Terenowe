import { Component } from '@angular/core';

/**
 * Generated class for the ContactDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-details',
  templateUrl: 'contact-details.html'
})
export class ContactDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello ContactDetailsComponent Component');
    this.text = 'Hello World';
  }

}
