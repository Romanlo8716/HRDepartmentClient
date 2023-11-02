import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressofdepartmentDeleteComponent } from './adressofdepartment-delete.component';

describe('AdressofdepartmentDeleteComponent', () => {
  let component: AdressofdepartmentDeleteComponent;
  let fixture: ComponentFixture<AdressofdepartmentDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressofdepartmentDeleteComponent]
    });
    fixture = TestBed.createComponent(AdressofdepartmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
