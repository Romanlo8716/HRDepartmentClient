import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressofdepartmentCreateComponent } from './adressofdepartment-create.component';

describe('AdressofdepartmentCreateComponent', () => {
  let component: AdressofdepartmentCreateComponent;
  let fixture: ComponentFixture<AdressofdepartmentCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressofdepartmentCreateComponent]
    });
    fixture = TestBed.createComponent(AdressofdepartmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
