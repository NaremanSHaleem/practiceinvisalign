/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyInvisalignComponent } from './why-invisalign.component';

describe('WhyInvisalignComponent', () => {
  let component: WhyInvisalignComponent;
  let fixture: ComponentFixture<WhyInvisalignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyInvisalignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyInvisalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
