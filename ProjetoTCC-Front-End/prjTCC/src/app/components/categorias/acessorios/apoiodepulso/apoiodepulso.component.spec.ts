import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoiodepulsoComponent } from './apoiodepulso.component';

describe('ApoiodepulsoComponent', () => {
  let component: ApoiodepulsoComponent;
  let fixture: ComponentFixture<ApoiodepulsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoiodepulsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoiodepulsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
