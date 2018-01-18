import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vet-registration',
  templateUrl: './vet-registration.component.html',
  styleUrls: ['./vet-registration.component.css']
})
export class VetRegistrationComponent implements OnInit {

  constructor() {}

  qualifications = new FormControl();
  qualificationList = ['Emergency and Critical Care', 'Dentistry', 'Cariology', 'Onacology', 'Neurology', 'Nutition'];


  userTypes = new FormControl();
  userTypeList = ["Vet", "Pet Owner", "Pet Care"];
  userType = "Vet";

  ngOnInit() {
  }

}
