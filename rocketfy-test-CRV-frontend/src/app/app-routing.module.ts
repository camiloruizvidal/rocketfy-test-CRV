import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DataVisualizationModule } from './modules/data-visualization/data-visualization.module';
import { SensorModule } from './modules/sensor/sensor.module';
import { DataAnalysisModule } from './modules/data-analysis/data-analysis.module';
import { loginGuard } from './modules/login/guards/login/login.guard';
import { TemplateDashboardComponent } from './common/template/template-dashboard/template-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  }, {
    path: 'dashboard',
    component: TemplateDashboardComponent,
    canActivate: [loginGuard],
    children: [{
      path: '',
      loadChildren: () =>
        import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    }, {
      path: 'data-visualization',
      loadChildren: () =>
        import('./modules/data-visualization/data-visualization.module').then(
          (m) => m.DataVisualizationModule
        )
    }, {
      path: 'sensor',
      loadChildren: () =>
        import('./modules/sensor/sensor.module').then(
          (m) => m.SensorModule
        )
    }, {
      path: 'data-analysis',
      loadChildren: () =>
        import('./modules/data-analysis/data-analysis.module').then(
          (m) => m.DataAnalysisModule
        )
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
