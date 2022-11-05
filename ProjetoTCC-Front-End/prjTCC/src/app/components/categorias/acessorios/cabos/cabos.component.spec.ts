import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabosComponent } from './cabos.component';

describe('CabosComponent', () => {
  let component: CabosComponent;
  let fixture: ComponentFixture<CabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
