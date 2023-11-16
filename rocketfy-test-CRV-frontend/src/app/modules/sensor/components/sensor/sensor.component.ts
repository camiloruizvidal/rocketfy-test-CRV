import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  public idSensor: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idSensor = this.route.snapshot.paramMap.get('idSensor') ?? '';
  }
}
