import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationAllComponent } from './vacation-all.component';

describe('VacationAllComponent', () => {
  let component: VacationAllComponent;
  let fixture: ComponentFixture<VacationAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationAllComponent]
    });
    fixture = TestBed.createComponent(VacationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
