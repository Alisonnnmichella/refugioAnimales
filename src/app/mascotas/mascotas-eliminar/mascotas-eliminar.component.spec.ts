import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasEliminarComponent } from './mascotas-eliminar.component';

describe('MascotasEliminarComponent', () => {
  let component: MascotasEliminarComponent;
  let fixture: ComponentFixture<MascotasEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
