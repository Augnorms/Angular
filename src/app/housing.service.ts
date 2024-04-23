import { Injectable } from '@angular/core';
import { HousingLocationInterface } from './housing-location';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  protected listOfHousting: HousingLocationInterface[] = [
        {
      id: 1,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/house1.jpeg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/house2.jpeg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 3,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/house3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 4,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/house4.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '../assets/house5.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 6,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/house6.png',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/house9.png',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/house4.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 9,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/house5.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 10,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '../assets/house1.jpeg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  constructor() { }

  getAllHousingLocationList():HousingLocationInterface[]{
    return this.listOfHousting
  }

  getHousingLocationById(id:Number):HousingLocationInterface | undefined{
    return this.listOfHousting.find((housingData)=>housingData.id === id);
  }
}
