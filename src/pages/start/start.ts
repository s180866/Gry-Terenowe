import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  constructor(public navCtrl: NavController,) {

  }

  login() {
    this.navCtrl.push(LoginPage);
    // NativeStorage.getItem('loginname').then(data => this.account.login = data);
    // NativeStorage.getItem('loginpassword').then(data => this.account.password = data);
    // if(this.account.login === '' || this.account.password === ''){
    // } else {
    // this.user.login(this.account);
    // }
  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }
}
