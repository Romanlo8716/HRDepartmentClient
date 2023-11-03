import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDismissedComponent } from './worker-dismissed.component';

describe('WorkerDismissedComponent', () => {
  let component: WorkerDismissedComponent;
  let fixture: ComponentFixture<WorkerDismissedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDismissedComponent]
    });
    fixture = TestBed.createComponent(WorkerDismissedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
