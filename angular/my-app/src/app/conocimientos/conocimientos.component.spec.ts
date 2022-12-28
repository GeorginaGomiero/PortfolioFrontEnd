import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGeoComponent } from './perfil-geo.component';

describe('PerfilGeoComponent', () => {
  let component: PerfilGeoComponent;
  let fixture: ComponentFixture<PerfilGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
