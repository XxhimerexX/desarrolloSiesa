import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToBaseComponent } from './convert-to-base.component';

describe('ConvertToBaseComponent', () => {
  let component: ConvertToBaseComponent;
  let fixture: ComponentFixture<ConvertToBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertToBaseComponent]
    });
    fixture = TestBed.createComponent(ConvertToBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
