import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaMaeComponent } from './placa-mae.component';

describe('PlacaMaeComponent', () => {
  let component: PlacaMaeComponent;
  let fixture: ComponentFixture<PlacaMaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacaMaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacaMaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
