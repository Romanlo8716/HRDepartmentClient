import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentChoosepostComponent } from './department-choosepost.component';

describe('DepartmentChoosepostComponent', () => {
  let component: DepartmentChoosepostComponent;
  let fixture: ComponentFixture<DepartmentChoosepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentChoosepostComponent]
    });
    fixture = TestBed.createComponent(DepartmentChoosepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
