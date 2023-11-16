import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISensor } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {

  private sensors: any[] = [
    {
      sensor_id: 1,
      sensor_name: 'Sensor de Clima',
      data: [
        {
          timestamp: '2023-09-26T08:00:00',
          temperature: 25.5,
          humidity: 60.2,
        },
        {
          timestamp: '2023-09-26T08:15:00',
          temperature: 25.7,
          humidity: 61.0,
        },
        {
          timestamp: '2023-09-26T08:30:00',
          temperature: 25.9,
          humidity: 68.5,
        },
        {
          timestamp: '2023-09-26T08:45:00',
          temperature: 26.1,
          humidity: 61.2,
        },
      ],
    },
    {
      sensor_id: 2,
      sensor_name: 'Sensor Meteorológico',
      data: [
        {
          timestamp: '2023-09-26T08:00:00',
          pressure: 1013.2,
          wind_speed: 5.8,
        },
        {
          timestamp: '2023-09-26T08:15:00',
          pressure: 1013.4,
          wind_speed: 4.8,
        },
        {
          timestamp: '2023-09-26T08:30:00',
          pressure: 1013.0,
          wind_speed: 5.2,
        },
        {
          timestamp: '2023-09-26T08:45:00',
          pressure: 1013.1,
          wind_speed: 5.1,
        },
      ],
    },
    {
      sensor_id: 3,
      sensor_name: 'Sensor Ambiental',
      data: [
        {
          timestamp: '2023-09-26T08:00:00',
          noise_level: 48.5,
          air_quality: 'Buena',
        },
        {
          timestamp: '2023-09-26T08:15:00',
          noise_level: 42.0,
          air_quality: 'Buena',
        },
        {
          timestamp: '2023-09-26T08:30:00',
          noise_level: 39.8,
          air_quality: 'Buena',
        },
        {
          timestamp: '2023-09-26T08:45:00',
          noise_level: 41.2,
          air_quality: 'Moderada',
        },
      ],
    },
  ];

  constructor() {}

  public getAllSensors(): Observable<ISensor[]> {
    return of(this.sensors);
  }

  public getSensor(idSensor: number): Observable<ISensor> {
    return of(this.sensors.find(sensor => sensor.sensor_id === idSensor));
  }
}
