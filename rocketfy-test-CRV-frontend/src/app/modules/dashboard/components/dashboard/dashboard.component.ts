import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISensor } from 'src/app/modules/sensor/model/interface';
import { SensorsService } from 'src/app/modules/sensor/service/sensors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public sensors: ISensor[] = [];

  constructor(
    private router: Router,
    private sensorsService: SensorsService
  ) {}

  ngOnInit(): void {
    this.loadSensors();
  }
  public redirectToSensorPage(idSensor: number) {
    this.router.navigate(['/dashboard/sensor', idSensor]);
  }

  public loadSensors(): void {

    this.sensorsService.getAllSensors().subscribe(response => {
      this.sensors = response;
    });

  }

}
