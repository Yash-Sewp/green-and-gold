import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrainComponent } from './strain.component';

describe('StrainComponent', () => {
  let component: StrainComponent;
  let fixture: ComponentFixture<StrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrainComponent]
    });
    fixture = TestBed.createComponent(StrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
