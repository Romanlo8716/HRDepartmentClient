import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAddindepartmentComponent } from './worker-addindepartment.component';

describe('WorkerAddindepartmentComponent', () => {
  let component: WorkerAddindepartmentComponent;
  let fixture: ComponentFixture<WorkerAddindepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerAddindepartmentComponent]
    });
    fixture = TestBed.createComponent(WorkerAddindepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
