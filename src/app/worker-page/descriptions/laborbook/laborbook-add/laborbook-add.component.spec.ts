import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborbookAddComponent } from './laborbook-add.component';

describe('LaborbookAddComponent', () => {
  let component: LaborbookAddComponent;
  let fixture: ComponentFixture<LaborbookAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborbookAddComponent]
    });
    fixture = TestBed.createComponent(LaborbookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
