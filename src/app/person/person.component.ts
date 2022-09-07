import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PincodeValidator } from '../validators/pincode.validator';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personForm!:FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.personForm = this._fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      dept: [''],
      gender: [''],
      dob: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6), PincodeValidator.checkPincode]]
    })
  }

  submit(){
      
  }



}
