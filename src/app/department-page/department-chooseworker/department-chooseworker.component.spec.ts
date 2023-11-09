import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentChooseworkerComponent } from './department-chooseworker.component';

describe('DepartmentChooseworkerComponent', () => {
  let component: DepartmentChooseworkerComponent;
  let fixture: ComponentFixture<DepartmentChooseworkerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentChooseworkerComponent]
    });
    fixture = TestBed.createComponent(DepartmentChooseworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
