import { NgModule } from '@angular/core';
import { CardChartComponent } from './card-chart/card-chart';
import { ContactDetailsComponent } from './contact-details/contact-details';
@NgModule({
	declarations: [CardChartComponent,
    ContactDetailsComponent],
	imports: [],
	exports: [CardChartComponent,
    ContactDetailsComponent]
})
export class ComponentsModule {}
