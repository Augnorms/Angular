import { Routes } from '@angular/router';
import { HousingDetailsComponent } from './housing-details/housing-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"", component: HomeComponent, title:"home-route"},
    {path:"housing-details/:id", component: HousingDetailsComponent, title:"housing-details"},
    {path:"about-page", component:AboutComponent, title:"about"}
];
