import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiclesListComponent } from './available-vehicles/vehicles.component';
import { ReservationComponent } from './reservation-form/reservation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'reservation-form', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
