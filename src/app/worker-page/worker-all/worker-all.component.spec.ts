import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerAllComponent } from './worker-all.component';

describe('WorkerAllComponent', () => {
  let component: WorkerAllComponent;
  let fixture: ComponentFixture<WorkerAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerAllComponent]
    });
    fixture = TestBed.createComponent(WorkerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
