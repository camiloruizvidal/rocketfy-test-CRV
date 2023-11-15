import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSelectionComponent } from './sensor-selection.component';

describe('SensorSelectionComponent', () => {
  let component: SensorSelectionComponent;
  let fixture: ComponentFixture<SensorSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorSelectionComponent]
    });
    fixture = TestBed.createComponent(SensorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
