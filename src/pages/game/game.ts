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

//   @ViewChild('map') mapElement: ElementRef;
//   map: any;
//
//   constructor(public navCtrl: NavController,
//               public navParams: NavParams,
//               public geolocation: Geolocation) {
//   }
//
//   ionViewDidLoad() {
//     this.loadMap();
//     this.watchUserPosition();
//   }
//
//   loadMaps() {
//     this.geolocation.getCurrentPosition().then((position) => {
//
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//
//       let pos: CameraPosition = {
//         target: location,
//         zoom: 18,
//         tilt: 20
//       };
//       console.log("position= " +position);
//
//       this.map.moveCamera(position);
//
//     }).catch((error) => {
//       console.log('Error getting location', error);
//     });
//   }
//
//   loadMap() {
//     this.map = new google.maps.Map(this.mapElement.nativeElement);
//
//     this.geolocation.getCurrentPosition().then((resp) => {
//       let pos: any = {
//         target: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
//         zoom: 12,
//         tilt: 0
//       };
//       this.map.animateCamera(pos);
//     });
//
//     this.geolocation.watchPosition()
//       .subscribe(position => {
//         let userPosition: any = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         let markerIcon = {
//           'url': 'https://lh3.googleusercontent.com/zPPRTrpL-rx7OMIqlYN63z40n',
//           'size': {
//             width: 20,
//             height: 20,
//           }
//         };
//         let markerOptions: any = {
//           position: userPosition,
//           icon: markerIcon
//         };
//         this.map.addMarker(markerOptions)
//       });
//   }
//
//   watchUserPosition() {
//     this.geolocation.watchPosition()
//       .subscribe(position => {
//         console.log(position.coords.longitude + ' ' + position.coords.latitude);
//       });
//   }
//
//   addMarker() {
//
//     let marker = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: this.map.getCenter()
//     });
//
//     let content = "<p>Added by: Asornix</p>";
//     console.log(marker);
//     this.addInfoWindow(marker, content);
//
//   }
//
//   addInfoWindow(marker, content) {
//
//     let infoWindow = new google.maps.InfoWindow({
//       content: content
//     });
//
//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });
//
//   }
//
// }
