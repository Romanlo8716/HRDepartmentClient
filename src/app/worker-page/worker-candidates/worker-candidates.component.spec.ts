import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCandidatesComponent } from './worker-candidates.component';

describe('WorkerCandidatesComponent', () => {
  let component: WorkerCandidatesComponent;
  let fixture: ComponentFixture<WorkerCandidatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerCandidatesComponent]
    });
    fixture = TestBed.createComponent(WorkerCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
