import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../types/vehicle';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehicleUrl = environment.vehicleApiUrl;

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    const url = `${this.vehicleUrl}/all`;
    return this.http.get<Vehicle[]>(url);
  }

  getVehiclesByLocation(location: string): Observable<Vehicle[]> {
    const url = `${this.vehicleUrl}/location/${location}`;
    return this.http.get<Vehicle[]>(url);
  }

  getVehiclesByType(type: string): Observable<Vehicle[]> {
    const url = `${this.vehicleUrl}/type/${type}`;
    return this.http.get<Vehicle[]>(url);
  }

}
