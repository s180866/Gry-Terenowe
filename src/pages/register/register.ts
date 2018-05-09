import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";
import {AuthService} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";
import {UserProvider} from "../../providers/user/user.provider";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signupError: string;
  form: FormGroup;

  constructor(fb: FormBuilder,
              private navCtrl: NavController,
              private userService: UserProvider,
              private auth: AuthService) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.userService.addUser(credentials.email);
    this.auth.signUp(credentials).then(
      () => {
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.setRoot(TabsPage);
      },
      error => this.signupError = error.message
    );
  }
}
