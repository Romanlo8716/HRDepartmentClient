import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPageComponent } from './worker-page.component';

describe('WorkerPageComponent', () => {
  let component: WorkerPageComponent;
  let fixture: ComponentFixture<WorkerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerPageComponent]
    });
    fixture = TestBed.createComponent(WorkerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
