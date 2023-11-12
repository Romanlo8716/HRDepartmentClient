import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalbookAddComponent } from './medicalbook-add.component';

describe('MedicalbookAddComponent', () => {
  let component: MedicalbookAddComponent;
  let fixture: ComponentFixture<MedicalbookAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalbookAddComponent]
    });
    fixture = TestBed.createComponent(MedicalbookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
