import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelativesComponent } from './add-relatives.component';

describe('AddRelativesComponent', () => {
  let component: AddRelativesComponent;
  let fixture: ComponentFixture<AddRelativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRelativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRelativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
