import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerWorkersComponent } from './worker-workers.component';

describe('WorkerWorkersComponent', () => {
  let component: WorkerWorkersComponent;
  let fixture: ComponentFixture<WorkerWorkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerWorkersComponent]
    });
    fixture = TestBed.createComponent(WorkerWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
