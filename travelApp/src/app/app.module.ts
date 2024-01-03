import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FlightComponent } from './Flight/Flight.component';
import { BusComponent } from './Bus/Bus.component';
import { CarComponent } from './Car/Car.component';
import { HotelComponent } from './Hotel/Hotel.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FlightComponent,
      BusComponent,
      CarComponent,
      HotelComponent,
      HomeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
