import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonesComponent } from './fones.component';

describe('FonesComponent', () => {
  let component: FonesComponent;
  let fixture: ComponentFixture<FonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
