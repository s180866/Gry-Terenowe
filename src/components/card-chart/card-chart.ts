import {Component, Input} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'card-chart',
  templateUrl: 'card-chart.html'
})
export class CardChartComponent {
  @Input() lineChartData: Array<any> = [
    {data: [1, 5, 1, 4]}
  ];
  @Input() lineChartLabels: Array<any> = ['12/07', '22/07', '31/07', '03/08'];
  @Input() lineChartColor: any = {
    showLine: false
  };
  @Input() lineChartOptions: any = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false,
          backdropColor: 'rgba(0, 0, 0, 0)',
        },
        gridLines: {
          display: false,
          drawBorder: false,
          zeroLineColor: 'transparent'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          display: false,
          backdropColor: 'rgba(0, 0, 0, 0)',
        },
        gridLines: {
          display: false,
          drawBorder: false,
          zeroLineColor: 'rgba(0, 0, 0, 0)',
        }
      }]
    },
    point: {
      radius: 0
    },
    responsive: true,
  };
  @Input() lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(76, 215, 130,0.2)',
      borderColor: 'rgba(76, 215, 130,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  @Input() lineChartLegend = false;
  @Input() lineChartType = 'line';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
