import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryAddComponent } from './military-add.component';

describe('MilitaryAddComponent', () => {
  let component: MilitaryAddComponent;
  let fixture: ComponentFixture<MilitaryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilitaryAddComponent]
    });
    fixture = TestBed.createComponent(MilitaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
