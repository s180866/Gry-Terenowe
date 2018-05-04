import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ContactDetailsComponent} from "../../components/contact-details/contact-details";
import {LastRunComponent} from "../../components/last-run/last-run";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
  }

  showModal() {
    let newModal = this.modalCtrl.create(LastRunComponent);
    newModal.present();
  }

}
