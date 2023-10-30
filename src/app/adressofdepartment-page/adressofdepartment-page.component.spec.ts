import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressofdepartmentPageComponent } from './adressofdepartment-page.component';

describe('AdressofdepartmentPageComponent', () => {
  let component: AdressofdepartmentPageComponent;
  let fixture: ComponentFixture<AdressofdepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressofdepartmentPageComponent]
    });
    fixture = TestBed.createComponent(AdressofdepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
