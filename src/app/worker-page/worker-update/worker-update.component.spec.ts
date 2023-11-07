import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerUpdateComponent } from './worker-update.component';

describe('WorkerUpdateComponent', () => {
  let component: WorkerUpdateComponent;
  let fixture: ComponentFixture<WorkerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerUpdateComponent]
    });
    fixture = TestBed.createComponent(WorkerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
