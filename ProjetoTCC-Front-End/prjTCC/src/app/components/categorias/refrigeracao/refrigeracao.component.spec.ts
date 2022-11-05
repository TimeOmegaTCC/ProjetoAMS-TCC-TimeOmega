import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeracaoComponent } from './refrigeracao.component';

describe('RefrigeracaoComponent', () => {
  let component: RefrigeracaoComponent;
  let fixture: ComponentFixture<RefrigeracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrigeracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
