import {Component, ViewChild} from '@angular/core';
import {Config, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StartPage} from "../pages/start/start";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = StartPage;

  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
