import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDescriptionPageComponent } from './worker-description-page.component';

describe('WorkerDescriptionPageComponent', () => {
  let component: WorkerDescriptionPageComponent;
  let fixture: ComponentFixture<WorkerDescriptionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDescriptionPageComponent]
    });
    fixture = TestBed.createComponent(WorkerDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
