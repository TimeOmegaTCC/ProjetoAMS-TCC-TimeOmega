import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuportesComponent } from './suportes.component';

describe('SuportesComponent', () => {
  let component: SuportesComponent;
  let fixture: ComponentFixture<SuportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
