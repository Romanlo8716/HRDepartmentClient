import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDismissComponent } from './worker-dismiss.component';

describe('WorkerDismissComponent', () => {
  let component: WorkerDismissComponent;
  let fixture: ComponentFixture<WorkerDismissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDismissComponent]
    });
    fixture = TestBed.createComponent(WorkerDismissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
