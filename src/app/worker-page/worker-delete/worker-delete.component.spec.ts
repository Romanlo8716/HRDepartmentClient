import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDeleteComponent } from './worker-delete.component';

describe('WorkerDeleteComponent', () => {
  let component: WorkerDeleteComponent;
  let fixture: ComponentFixture<WorkerDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDeleteComponent]
    });
    fixture = TestBed.createComponent(WorkerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
