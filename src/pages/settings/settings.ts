import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  isActive = true;

  constructor(public navCtrl: NavController) {

  }

  changeIsActive() {
    this.isActive = !this.isActive
  }

}
