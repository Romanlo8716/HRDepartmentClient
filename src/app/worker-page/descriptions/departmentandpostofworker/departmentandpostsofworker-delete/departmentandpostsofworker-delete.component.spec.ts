import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentandpostsofworkerDeleteComponent } from './departmentandpostsofworker-delete.component';

describe('DepartmentandpostsofworkerDeleteComponent', () => {
  let component: DepartmentandpostsofworkerDeleteComponent;
  let fixture: ComponentFixture<DepartmentandpostsofworkerDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentandpostsofworkerDeleteComponent]
    });
    fixture = TestBed.createComponent(DepartmentandpostsofworkerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
