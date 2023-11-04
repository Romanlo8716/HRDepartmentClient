import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRecoveryComponent } from './worker-recovery.component';

describe('WorkerRecoveryComponent', () => {
  let component: WorkerRecoveryComponent;
  let fixture: ComponentFixture<WorkerRecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerRecoveryComponent]
    });
    fixture = TestBed.createComponent(WorkerRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
