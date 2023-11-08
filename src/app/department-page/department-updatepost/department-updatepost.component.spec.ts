import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUpdatepostComponent } from './department-updatepost.component';

describe('DepartmentUpdatepostComponent', () => {
  let component: DepartmentUpdatepostComponent;
  let fixture: ComponentFixture<DepartmentUpdatepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentUpdatepostComponent]
    });
    fixture = TestBed.createComponent(DepartmentUpdatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
