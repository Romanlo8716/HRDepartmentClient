import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCreateComponent } from './worker-create.component';

describe('WorkerCreateComponent', () => {
  let component: WorkerCreateComponent;
  let fixture: ComponentFixture<WorkerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerCreateComponent]
    });
    fixture = TestBed.createComponent(WorkerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
