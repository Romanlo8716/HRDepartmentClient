import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAddpostComponent } from './department-addpost.component';

describe('DepartmentAddpostComponent', () => {
  let component: DepartmentAddpostComponent;
  let fixture: ComponentFixture<DepartmentAddpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentAddpostComponent]
    });
    fixture = TestBed.createComponent(DepartmentAddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
