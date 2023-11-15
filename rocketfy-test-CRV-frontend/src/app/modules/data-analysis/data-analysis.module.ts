import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataAnalysisRoutingModule } from './data-analysis-routing.module';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';


@NgModule({
  declarations: [
    DataAnalysisComponent
  ],
  imports: [
    CommonModule,
    DataAnalysisRoutingModule
  ]
})
export class DataAnalysisModule { }
