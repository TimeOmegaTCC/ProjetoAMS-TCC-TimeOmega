import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacadevideoComponent } from './placadevideo.component';

describe('PlacadevideoComponent', () => {
  let component: PlacadevideoComponent;
  let fixture: ComponentFixture<PlacadevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacadevideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacadevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
