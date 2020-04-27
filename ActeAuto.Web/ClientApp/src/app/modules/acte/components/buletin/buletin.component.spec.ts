import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuletinComponent } from './buletin.component';

describe('BuletinComponent', () => {
  let component: BuletinComponent;
  let fixture: ComponentFixture<BuletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
