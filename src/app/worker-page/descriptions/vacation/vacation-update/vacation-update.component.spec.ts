import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationUpdateComponent } from './vacation-update.component';

describe('VacationUpdateComponent', () => {
  let component: VacationUpdateComponent;
  let fixture: ComponentFixture<VacationUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationUpdateComponent]
    });
    fixture = TestBed.createComponent(VacationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
