import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationInterface } from '../housing-location';
import { HousingService } from '../housing.service';

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
    </section>

    <app-housing-location [Location]="housingLocation"/>

   </main>
  `,
})
export class HomeComponent {
 housingLocation: HousingLocationInterface[] = [];
 
  constructor(private housingService: HousingService) {
   this.housingLocation = this.housingService.getAllHousingLocationList();
  }

  ngOnInit(): void {}
}
