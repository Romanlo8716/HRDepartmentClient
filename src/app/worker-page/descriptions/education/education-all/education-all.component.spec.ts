import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAllComponent } from './education-all.component';

describe('EducationAllComponent', () => {
  let component: EducationAllComponent;
  let fixture: ComponentFixture<EducationAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationAllComponent]
    });
    fixture = TestBed.createComponent(EducationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
