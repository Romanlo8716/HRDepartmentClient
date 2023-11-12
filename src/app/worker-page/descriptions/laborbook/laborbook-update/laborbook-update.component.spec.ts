import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborbookUpdateComponent } from './laborbook-update.component';

describe('LaborbookUpdateComponent', () => {
  let component: LaborbookUpdateComponent;
  let fixture: ComponentFixture<LaborbookUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborbookUpdateComponent]
    });
    fixture = TestBed.createComponent(LaborbookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
