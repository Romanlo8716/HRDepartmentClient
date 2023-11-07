import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressofdepartmentDescriptionComponent } from './adressofdepartment-description.component';

describe('AdressofdepartmentDescriptionComponent', () => {
  let component: AdressofdepartmentDescriptionComponent;
  let fixture: ComponentFixture<AdressofdepartmentDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressofdepartmentDescriptionComponent]
    });
    fixture = TestBed.createComponent(AdressofdepartmentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
