import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassetsComponent } from './addassets.component';

describe('AddassetsComponent', () => {
  let component: AddassetsComponent;
  let fixture: ComponentFixture<AddassetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
