import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalbookDeleteComponent } from './medicalbook-delete.component';

describe('MedicalbookDeleteComponent', () => {
  let component: MedicalbookDeleteComponent;
  let fixture: ComponentFixture<MedicalbookDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalbookDeleteComponent]
    });
    fixture = TestBed.createComponent(MedicalbookDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
