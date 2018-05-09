import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthService} from "../../providers/auth/auth";
import {StatusBar} from "@ionic-native/status-bar";
import {UserProvider} from "../../providers/user/user.provider";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  isActive = true;

  constructor(menu: MenuController,
              private statusBar: StatusBar,
              private userService: UserProvider,
              private nav: NavController,
              private auth: AuthService) {

  }

  changeIsActive() {
    this.isActive = !this.isActive
  }

  addUser(e){
    this.userService.addUser(e)
  }


  logout() {
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }
}
