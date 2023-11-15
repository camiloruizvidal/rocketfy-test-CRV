import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorSelectionRoutingModule } from './sensor-selection-routing.module';
import { SensorSelectionComponent } from './components/sensor-selection/sensor-selection.component';


@NgModule({
  declarations: [
    SensorSelectionComponent
  ],
  imports: [
    CommonModule,
    SensorSelectionRoutingModule
  ]
})
export class SensorSelectionModule { }
