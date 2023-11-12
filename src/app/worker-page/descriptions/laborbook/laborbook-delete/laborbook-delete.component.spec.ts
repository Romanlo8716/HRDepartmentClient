import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborbookDeleteComponent } from './laborbook-delete.component';

describe('LaborbookDeleteComponent', () => {
  let component: LaborbookDeleteComponent;
  let fixture: ComponentFixture<LaborbookDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborbookDeleteComponent]
    });
    fixture = TestBed.createComponent(LaborbookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
