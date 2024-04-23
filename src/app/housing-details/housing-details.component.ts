import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { HousingLocationInterface } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-details',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  template:`
    <main class="w-full h-[92vh] bg-white-400 rounded shadow-md p-2">
      <div class="w-full text-center p-2 shadow">
        <h1 class="text-xl font-bold">Welcome to the details page</h1>
      </div> 
     
       <div class="mt-2 p-2 flex justify-center">
          <div class="w-40 h-40 rounded-full shadow-xl border">
            <img class="w-40 h-40 rounded-full object-fit shadow-xl" [src]="housingData?.photo" alt="house{{housingData?.name}}"/> 
          </div>
       </div>
       
       <div class="mt-2 p-2">
         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">Name:</span> <span class="text-lg">{{housingData?.name}}</span>
         </div> 

         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">City:</span> <span class="text-lg">{{housingData?.city}}</span>
         </div> 

         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">State:</span> <span class="text-lg">{{housingData?.state}}</span>
         </div> 

         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">AvailabilityUnit:</span> <span class="text-lg">{{housingData?.availableUnits}}</span>
         </div> 

         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">Wifi:</span> <span class="text-lg">{{housingData?.wifi}}</span>
         </div>

         <div class="flex gap-2 shadow-md p-3 mb-4">
           <span class="font-bold text-lg">Laundry:</span> <span class="text-lg">{{housingData?.laundry}}</span>
         </div>

         <div class="flex justify-end gap-2 shadow-md p-3 mt-5">
           <button class="w-40 border p-4 rounded" (click)="handlToggle()">
             Apply now
           </button>
         </div>
       </div>

       <div class="
        w-full h-full absolute 
        top-0 left-0 z-10 
        flex justify-center items-center
       " *ngIf="isOpen">
         <div class="w-[40%] p-2 border shadow rounded bg-white" [formGroup]="form">
           <div class="w-full p-2 flex justify-end border-b-1">
             <div class="w-4 h-4 shadow rounded-full bg-red-500 cursor-pointer" (click)="handlToggle()">
             </div>
           </div>

           <div class="flex gap-2 m-2">
             <span class="w-[20%] text-lg font-bold">Firstname:</span>
             <input 
               type="text" 
               class="w-[80%] border p-2 rounded" 
               placeholder="Enter firstname"
               formControlName="firstname"
             />
           </div>

           <div class="flex gap-2 m-2">
             <span class="w-[20%] text-lg font-bold">Lasttname:</span>
             <input 
               type="text" 
               class="w-[80%] border p-2 rounded" 
               placeholder="Enter Lastname"
               formControlName="lastname"
             />
           </div>

           <div class="flex gap-2 m-2">
             <span class="w-[20%] text-lg font-bold">Email:</span>
             <input 
               type="text" 
               class="w-[80%] border p-2 rounded" 
               placeholder="Enter email"
               formControlName="email"
             />
           </div>

           <div class="flex justify-end gap-2 shadow-md p-2 mt-5">
            <button class="w-40 border p-2 rounded bg-cyan-300 text-white" (click)="apply()">
              Apply
            </button>
         </div>
         </div>
       </div>

    </main>
  `
})

export class HousingDetailsComponent {
  isOpen:boolean = false;
  housingId:number = 0;
  housingData: HousingLocationInterface | undefined = {
    id:0,
    name: "",
    city: "",
    state: "",
    photo: "",
    availableUnits: 0,
    wifi: false,
    laundry: false
};

//form control
  form = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email:new FormControl("")
  });

  constructor(private route: ActivatedRoute, private housingService:HousingService){
      this.housingId = Number(this.route.snapshot.params['id']);
      this.housingData = this.housingService.getHousingLocationById(this.housingId);    
  };

  ngOnInit():void{
    // this.form.valueChanges.subscribe(value => {
    //   console.log(value); // Log form values when they change
    // });
  }

  apply(){
    let formData = this.form.value
    console.log("result", formData);
  }

  handlToggle():boolean{
    return this.isOpen = !this.isOpen
  }
}


