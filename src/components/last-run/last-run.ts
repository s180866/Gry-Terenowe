import {Component} from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  selector: 'last-run',
  templateUrl: 'last-run.html'
})
export class LastRunComponent {


  constructor(private viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  };
}
