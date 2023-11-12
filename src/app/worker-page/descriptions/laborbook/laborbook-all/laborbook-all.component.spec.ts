import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborbookAllComponent } from './laborbook-all.component';

describe('LaborbookAllComponent', () => {
  let component: LaborbookAllComponent;
  let fixture: ComponentFixture<LaborbookAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborbookAllComponent]
    });
    fixture = TestBed.createComponent(LaborbookAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
