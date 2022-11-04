import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidecategoryComponent } from './slidecategory.component';

describe('SlidecategoryComponent', () => {
  let component: SlidecategoryComponent;
  let fixture: ComponentFixture<SlidecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidecategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
