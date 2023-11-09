import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentConfirmworkerComponent } from './department-confirmworker.component';

describe('DepartmentConfirmworkerComponent', () => {
  let component: DepartmentConfirmworkerComponent;
  let fixture: ComponentFixture<DepartmentConfirmworkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentConfirmworkerComponent]
    });
    fixture = TestBed.createComponent(DepartmentConfirmworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
