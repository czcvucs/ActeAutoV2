import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumparatorComponent } from './cumparator.component';

describe('CumparatorComponent', () => {
  let component: CumparatorComponent;
  let fixture: ComponentFixture<CumparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
