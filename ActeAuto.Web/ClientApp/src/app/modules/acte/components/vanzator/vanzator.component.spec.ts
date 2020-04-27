import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanzatorComponent } from './vanzator.component';

describe('VanzatorComponent', () => {
  let component: VanzatorComponent;
  let fixture: ComponentFixture<VanzatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanzatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanzatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
