import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWebapiComponent } from './check-webapi.component';

describe('CheckWebapiComponent', () => {
  let component: CheckWebapiComponent;
  let fixture: ComponentFixture<CheckWebapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckWebapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWebapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
