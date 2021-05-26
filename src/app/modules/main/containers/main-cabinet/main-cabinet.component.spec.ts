import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCabinetComponent } from './main-cabinet.component';

describe('MainCabinetComponent', () => {
  let component: MainCabinetComponent;
  let fixture: ComponentFixture<MainCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCabinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
