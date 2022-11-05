import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastatermicaComponent } from './pastatermica.component';

describe('PastatermicaComponent', () => {
  let component: PastatermicaComponent;
  let fixture: ComponentFixture<PastatermicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastatermicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastatermicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
