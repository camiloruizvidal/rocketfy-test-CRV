import { SensorSelectionComponent } from './components/sensor-selection/sensor-selection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: ':nombre',
  component: SensorSelectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorSelectionRoutingModule { }
