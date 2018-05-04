import {NgModule} from '@angular/core';
import {CardChartComponent} from './card-chart/card-chart';
import {ContactDetailsComponent} from './contact-details/contact-details';
import { LastRunComponent } from './last-run/last-run';

@NgModule({
  declarations: [
    CardChartComponent,
    ContactDetailsComponent,
    LastRunComponent
  ],
  imports: [],
  exports: [
    CardChartComponent,
    ContactDetailsComponent,
    LastRunComponent
  ]
})
export class ComponentsModule {
}
