import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalbookAllComponent } from './medicalbook-all.component';

describe('MedicalbookAllComponent', () => {
  let component: MedicalbookAllComponent;
  let fixture: ComponentFixture<MedicalbookAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalbookAllComponent]
    });
    fixture = TestBed.createComponent(MedicalbookAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
