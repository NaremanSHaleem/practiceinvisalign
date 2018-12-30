/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AwardWinningComponent } from './award-winning.component';

describe('AwardWinningComponent', () => {
  let component: AwardWinningComponent;
  let fixture: ComponentFixture<AwardWinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardWinningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardWinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
