import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {AuthService} from "../../providers/auth/auth";
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {UserProvider} from "../../providers/user/user.provider";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(private navCtrl: NavController,
              private auth: AuthService,
              private userService: UserProvider,
              fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        (res) => {
          this.navCtrl.setRoot(HomePage)
        },
        error => this.loginError = error.message
      );
  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        () => {
          this.navCtrl.setRoot(HomePage);
          this.navCtrl.setRoot(TabsPage);
        },
        error => console.log(error.message)
      );
  }
}
