import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInterface } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template:`
  <main class="w-full h-[92vh] p-2">
    <section class="w-full flex justify-center gap-5">
      <div class="text-lg font-bold p-2"> Search :</div>
      <div class="w-[30%]">
          <input 
          type="text" 
          class="border rounded ml-2 w-[100%] p-2
          border-cyan-200
          "
          placeholder="type in your search here"
          />
      </div>
      <div class="w-[10%]">
        <Button class="w-full p-2 border rounded border-cyan-300">
          search
        </Button>
      </div>
      {{names.firstname}}
    </section>

    <app-housing-location [Location]="housingLocation"/>

   </main>
  `,
})

export class HomeComponent {
  housingLocation: HousingLocationInterface[] = [];
  names = {
    firstname: "",
    lastname: "",
    email: ""
  };

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.loadHousingLocations();
    const formValues = this.housingService.getFormValues();
    this.names.firstname = formValues.firstname;
    this.names.lastname = formValues.lastname;
    this.names.email = formValues.email;
  }

  url =  "http://localhost:3000/Locations";


  async loadHousingLocations() {
    try {
      const response = await fetch(this.url);

      const data = await response.json() ?? []

      if(data){
        this.housingLocation = data
      }

    } catch (error) {
      console.error('Error loading housing locations:', error);
    }finally{
     //
    }
  }
}