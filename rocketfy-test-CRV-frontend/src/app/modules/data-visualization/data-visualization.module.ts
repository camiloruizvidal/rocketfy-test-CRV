import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataVisualizationRoutingModule } from './data-visualization-routing.module';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';


@NgModule({
  declarations: [
    DataVisualizationComponent
  ],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule
  ]
})
export class DataVisualizationModule { }
