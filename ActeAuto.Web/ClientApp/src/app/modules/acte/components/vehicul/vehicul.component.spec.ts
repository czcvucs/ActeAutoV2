import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculComponent } from './vehicul.component';

describe('VehiculComponent', () => {
  let component: VehiculComponent;
  let fixture: ComponentFixture<VehiculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
