import {Component} from '@angular/core';
import {ModalController, NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'contact-details',
  templateUrl: 'contact-details.html'
})
export class ContactDetailsComponent {

  userObj: any;

  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, params: NavParams) {
    this.userObj = params.get('data')
  }

  closeModal() {
    this.viewCtrl.dismiss();
  };
}
