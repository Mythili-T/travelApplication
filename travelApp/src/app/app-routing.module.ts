import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Header/Header.component';
import { FlightComponent } from './Flight/Flight.component';
import { BusComponent } from './Bus/Bus.component';
import { CarComponent } from './Car/Car.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './Hotel/Hotel.component';
import { BookAppComponent } from './bookApp/bookApp.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
    path:"",
    component:BookAppComponent
  },
{
  path:"Flight-Component",
  component:FlightComponent
},
{
  path:"Bus-Component",
  component:BusComponent
},
{
  path:"Car-Component",
  component:CarComponent
},
{
  path:"Hotel-Component",
  component:HotelComponent
},
{
  path:"Addbook-Component",
  component:AddBookComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
