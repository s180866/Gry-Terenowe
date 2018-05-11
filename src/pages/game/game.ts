import {Component} from '@angular/core';
import {Events, IonicPage, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng
} from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  map: GoogleMap;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              private googleMaps: GoogleMaps,
              private geolocation: Geolocation,
              public events: Events,
              public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      this.loadMap();
    });
    events.subscribe('change:location', () => {
      this.GetCurrentLocation();
    });
  }

  GetCurrentLocation() {

    this.geolocation.getCurrentPosition({maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}).then((resp) => {
      console.log(resp.coords.latitude + ", " + resp.coords.longitude);
      let location = new LatLng(resp.coords.latitude, resp.coords.longitude);
      console.log("location= " + location);

      let position: any = {
        target: location,
        zoom: 18,
        tilt: 20
      };
      console.log("position= " + position);

      this.map.moveCamera(position);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition({maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}).then((resp) => {
      console.log(resp.coords.latitude + ", " + resp.coords.longitude);
      let location = new LatLng(resp.coords.latitude, resp.coords.longitude);

      let element: HTMLElement = document.getElementById('map');

      this.map = GoogleMaps.create(element);

      this.map.one(GoogleMapsEvent.MAP_READY).then(
        () => {
          console.log('Map is ready!');
        }
      );

      let position: any = {
        target: location,
        zoom: 18,
        tilt: 20
      };

      this.map.moveCamera(position);


    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }
}
