import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import {GamePage} from "../game/game";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = SettingsPage;
  tab4Root = GamePage;

  constructor() {

  }
}
