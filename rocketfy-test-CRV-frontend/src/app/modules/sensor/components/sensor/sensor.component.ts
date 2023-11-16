import { SensorsService } from 'src/app/modules/sensor/service/sensors.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISensor } from '../../model/interface';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  private idSensor: number = 0;
  public sensor!: ISensor;

  constructor(
    private route: ActivatedRoute,
    private sensorsService: SensorsService
  ) {}

  ngOnInit(): void {
    this.loadSensorData();
  }

  private loadSensorData(): void {

    const id = this.route.snapshot.paramMap.get('idSensor');
    this.idSensor = id ? Number(id) : 0;

    this.sensorsService.getSensor(this.idSensor).subscribe(response => {
      this.sensor = response;
    })

  }

}
