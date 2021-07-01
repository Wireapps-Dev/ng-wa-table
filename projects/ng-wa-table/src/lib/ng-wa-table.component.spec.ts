import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWaTableComponent } from './ng-wa-table.component';

describe('NgWaTableComponent', () => {
  let component: NgWaTableComponent;
  let fixture: ComponentFixture<NgWaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgWaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
