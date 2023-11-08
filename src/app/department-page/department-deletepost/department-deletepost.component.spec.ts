import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDeletepostComponent } from './department-deletepost.component';

describe('DepartmentDeletepostComponent', () => {
  let component: DepartmentDeletepostComponent;
  let fixture: ComponentFixture<DepartmentDeletepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentDeletepostComponent]
    });
    fixture = TestBed.createComponent(DepartmentDeletepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
