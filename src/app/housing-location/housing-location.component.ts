import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HousingDetailsComponent } from '../housing-details/housing-details.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink, HomeComponent, HousingDetailsComponent ],
  template:`
   <main class="w-full p-2 h-[85vh] mt-2 border shadow rounded">
    
     <div class="grid grid-cols-5 grid-rows-3 gap-4">
       <div *ngFor="let locationItem of Location; let i=index" class="border rounded shadow-lg">
        <a routerLink="housing-details/{{locationItem.id}}">
         <div class="h-[160px] border">
           <img [src]="locationItem.photo" alt="{{ locationItem.name }}" class="w-full h-full object-fit"/> 
         </div>
         <div class="p-2 text-center font-bold">
           {{ locationItem.state }}{{i}}
         </div>
         <div class="p-2 text-center font-bold">
            {{ locationItem.name }}
         </div>
        </a>
       </div>
     </div>

   </main>
  `
})
export class HousingLocationComponent {
 @Input() Location!: HousingLocationInterface[];
}
