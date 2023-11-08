import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDescriptionpostComponent } from './department-descriptionpost.component';

describe('DepartmentDescriptionpostComponent', () => {
  let component: DepartmentDescriptionpostComponent;
  let fixture: ComponentFixture<DepartmentDescriptionpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentDescriptionpostComponent]
    });
    fixture = TestBed.createComponent(DepartmentDescriptionpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
