import {Component, ViewChild} from '@angular/core';
import {App, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {StartPage} from "../pages/start/start";
import {HomePage} from "../pages/home/home";
import {AuthService} from "../providers/auth/auth";
import {LoginPage} from "../pages/login/login";
import {ContactPage} from "../pages/contact/contact";
import {GamePage} from "../pages/game/game";
import {RegisterPage} from "../pages/register/register";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages;
  rootPage;

  private app;
  private platform;
  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  constructor(app: App,
              platform: Platform,
              menu: MenuController,
              private statusBar: StatusBar,
              private auth: AuthService) {
    this.menu = menu;
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    this.pages = [
      {component: HomePage, title: 'HomePage', segment: 'home'},
      {component: GamePage, title: 'GamePage', segment: 'game'},
      {component: StartPage, title: 'StartPage', segment: 'start'},
      {component: ContactPage, title: 'ContactPage', segment: 'contact'},
      {component: LoginPage, title: 'LoginPage', segment: 'login'},
      {component: RegisterPage, title: 'RegisterPage', segment: 'register'},
      {component: SettingsPage, title: 'SettingsPage', segment: 'settings'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.openPage(TabsPage)
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }

  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }



  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page);
  }
}
