import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDatosComponent } from './doctor-datos.component';

describe('DoctorDatosComponent', () => {
  let component: DoctorDatosComponent;
  let fixture: ComponentFixture<DoctorDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
