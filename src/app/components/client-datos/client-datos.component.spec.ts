import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDatosComponent } from './client-datos.component';

describe('ClientDatosComponent', () => {
  let component: ClientDatosComponent;
  let fixture: ComponentFixture<ClientDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
