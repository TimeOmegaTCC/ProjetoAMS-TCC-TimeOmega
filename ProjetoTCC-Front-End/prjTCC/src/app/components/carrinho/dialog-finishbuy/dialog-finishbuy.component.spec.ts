import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinishbuyComponent } from './dialog-finishbuy.component';

describe('DialogFinishbuyComponent', () => {
  let component: DialogFinishbuyComponent;
  let fixture: ComponentFixture<DialogFinishbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFinishbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFinishbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
