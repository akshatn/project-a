import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  constructor() { }

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];


	alertMe(): void {
	    setTimeout(function(): void {
	      alert("You've selected the alert tab!");
	    });
	  }


  ngOnInit() {
  }





}


