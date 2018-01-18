import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOwnerRegistrationComponent } from './pet-owner-registration.component';

describe('PetOwnerRegistrationComponent', () => {
  let component: PetOwnerRegistrationComponent;
  let fixture: ComponentFixture<PetOwnerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetOwnerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOwnerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
