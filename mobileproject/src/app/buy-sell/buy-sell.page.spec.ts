import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellPage } from './buy-sell.page';

describe('BuySellPage', () => {
  let component: BuySellPage;
  let fixture: ComponentFixture<BuySellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
