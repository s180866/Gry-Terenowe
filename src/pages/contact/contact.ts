import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ContactDetailsComponent} from "../../components/contact-details/contact-details";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts = [
    {
      id: 1,
      name: 'Asornix',
      points: 2542,
      lastMatch: 'Wczoraj'
    },
    {
      id: 2,
      name: 'Testy',
      points: 1874,
      lastMatch: 'Dwa dni temu'
    },
    {
      id: 3,
      name: 'Moraws',
      points: 1256,
      lastMatch: 'Dwa dni temu'
    },
    {
      id: 4,
      name: 'Kilas',
      points: 1452,
      lastMatch: 'Dwa dni temu'
    },
    {
      id: 5,
      name: 'Polsi',
      points: 2214,
      lastMatch: 'Dwa dni temu'
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
  }

  showMoreDetails(user) {
    let newModal = this.modalCtrl.create(ContactDetailsComponent, {data: user});
    newModal.present();
  }

}
