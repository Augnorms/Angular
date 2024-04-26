import { Component } from '@angular/core';
import { InputFieldComponent } from '../reusable/input-field/input-field.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InputFieldComponent, ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <app-input-field
        [type]="'text'"
        [style]="''"
        [placeholder]="'Enter your name here...'"
        [required]="false"
        [label]="'Firstname'"
        [form]="form"
        [controlName]="'firstname'"
      ></app-input-field>
      
      <app-input-field
        [type]="'text'"
        [style]="''"
        [placeholder]="'Enter your name here...'"
        [required]="false"
        [label]="'Lastname'"
        [form]="form"
        [controlName]="'lastname'"
      ></app-input-field>
      </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}