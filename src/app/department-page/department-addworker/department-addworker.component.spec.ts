import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAddworkerComponent } from './department-addworker.component';

describe('DepartmentAddworkerComponent', () => {
  let component: DepartmentAddworkerComponent;
  let fixture: ComponentFixture<DepartmentAddworkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentAddworkerComponent]
    });
    fixture = TestBed.createComponent(DepartmentAddworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
