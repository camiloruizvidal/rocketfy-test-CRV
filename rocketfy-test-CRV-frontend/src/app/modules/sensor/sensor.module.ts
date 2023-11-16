import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { SensorComponent } from './components/sensor/sensor.component';


@NgModule({
  declarations: [
    SensorComponent
  ],
  imports: [
    CommonModule,
    SensorRoutingModule
  ]
})
export class SensorModule { }
