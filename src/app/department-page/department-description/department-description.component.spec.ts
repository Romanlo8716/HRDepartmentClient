import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDescriptionComponent } from './department-description.component';

describe('DepartmentDescriptionComponent', () => {
  let component: DepartmentDescriptionComponent;
  let fixture: ComponentFixture<DepartmentDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentDescriptionComponent]
    });
    fixture = TestBed.createComponent(DepartmentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
