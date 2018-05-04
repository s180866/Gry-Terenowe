import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AboutPage} from '../pages/about/about';
import {SettingsPage} from '../pages/settings/settings';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SharedModule} from "./shared.module";
import {AuthProvider} from '../providers/auth/auth';
import {ChartsModule} from 'ng2-charts';
import {CardChartComponent} from "../components/card-chart/card-chart";
import {ContactDetailsComponent} from "../components/contact-details/contact-details";
import {StartPage} from "../pages/start/start";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    StartPage,
    CardChartComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    SharedModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs'},
        {component: StartPage, name: 'StartPage', segment: 'start'},
        {component: HomePage, name: 'HomePage', segment: 'home'},
        {component: AboutPage, name: 'AboutPage', segment: 'about'},
        {component: SettingsPage, name: 'SettingsPage', segment: 'settings'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {
}
