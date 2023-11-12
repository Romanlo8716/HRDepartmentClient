import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalbookUpdateComponent } from './medicalbook-update.component';

describe('MedicalbookUpdateComponent', () => {
  let component: MedicalbookUpdateComponent;
  let fixture: ComponentFixture<MedicalbookUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalbookUpdateComponent]
    });
    fixture = TestBed.createComponent(MedicalbookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
