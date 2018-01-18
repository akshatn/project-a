import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRegistrationComponent } from './vet-registration.component';

describe('VetRegistrationComponent', () => {
  let component: VetRegistrationComponent;
  let fixture: ComponentFixture<VetRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
