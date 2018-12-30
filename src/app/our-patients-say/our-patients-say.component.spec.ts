/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurPatientsSayComponent } from './our-patients-say.component';

describe('OurPatientsSayComponent', () => {
  let component: OurPatientsSayComponent;
  let fixture: ComponentFixture<OurPatientsSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPatientsSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPatientsSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
