import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressofdepartmentUpdateComponent } from './adressofdepartment-update.component';

describe('AdressofdepartmentUpdateComponent', () => {
  let component: AdressofdepartmentUpdateComponent;
  let fixture: ComponentFixture<AdressofdepartmentUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressofdepartmentUpdateComponent]
    });
    fixture = TestBed.createComponent(AdressofdepartmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
