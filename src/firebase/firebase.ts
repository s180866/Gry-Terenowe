import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from "@angular/core";
import {NavController} from "ionic-angular";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthProvider {
  songs: Observable<any>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    this.songs = afDatabase.list<any>('/songs').valueChanges();
  }
}
