import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ContactDetailsComponent} from "../../components/contact-details/contact-details";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  contacts = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    },
    {
      id:4
    },
    {
      id:5
    },
  ]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
  }

  showMoreDetails(){
    let newModal = this.modalCtrl.create(ContactDetailsComponent);
    newModal.present();
  }

}
