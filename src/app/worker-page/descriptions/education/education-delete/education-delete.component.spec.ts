import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDeleteComponent } from './education-delete.component';

describe('EducationDeleteComponent', () => {
  let component: EducationDeleteComponent;
  let fixture: ComponentFixture<EducationDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationDeleteComponent]
    });
    fixture = TestBed.createComponent(EducationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
