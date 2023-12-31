import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPageComponent } from './department-page.component';

describe('DepartmentPageComponent', () => {
  let component: DepartmentPageComponent;
  let fixture: ComponentFixture<DepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentPageComponent]
    });
    fixture = TestBed.createComponent(DepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
