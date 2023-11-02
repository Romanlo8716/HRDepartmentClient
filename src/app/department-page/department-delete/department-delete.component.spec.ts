import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeleteComponent } from './department-delete.component';

describe('DepartmentDeleteComponent', () => {
  let component: DepartmentDeleteComponent;
  let fixture: ComponentFixture<DepartmentDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentDeleteComponent]
    });
    fixture = TestBed.createComponent(DepartmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
