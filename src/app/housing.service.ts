import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  housingList:HousingLocationInterface[] = [];

  form:FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {}

  getForm():FormGroup{
    return this.form;
  }

  setData(data:HousingLocationInterface[]):HousingLocationInterface[]{
    return this.housingList = data;
  }

  getData():HousingLocationInterface[]{
    return this.housingList;
  }

  getFormValues(){
    return this.form.value;
  }

  resetForm():void{
   this.form.reset();
  }

  //set values to a form
  reassignForm(firstname:string, lastname:string, email:string):void{
   this.form.setValue({
    firstname: firstname,
    lastname: lastname,
    email: email
  });
  }
}
