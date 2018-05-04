import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NavController, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";
import {AuthProvider} from "../../providers/auth/auth";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { login: string, password: string } = {
    login: '',
    password: ''
  };
  userData: any;
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
  }

  userLogin() {
    this.navCtrl.push(HomePage)
    this.navCtrl.setRoot(TabsPage,{})
    // this.user.login(this.account)
    //   .subscribe(res => {
    //     if (res.status === 200) {
    //       this.navCtrl.push(HomePage);
    //
    //       NativeStorage.setItem('loginname', this.account.login)
    //         .then(() => console.log('Stored Login Data!'), error => console.error('Error storing LoginData', error));
    //
    //       NativeStorage.setItem('loginpassword', this.account.password)
    //         .then(() => console.log('Stored Password Data!'), error => console.error('Error storing Password', error));
    //     } else {
    //       let toast = this.toastCtrl.create({
    //         message: this.loginErrorString,
    //         duration: 3000,
    //         position: 'top'
    //       });
    //       toast.present();
    //     }
    //   });
  }

  getUserData(){
    return this.userData;
  }
}
