import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Bookings } from './mock-bookungs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private HttpClient : HttpClient) { }

  //End Punkt definieren, Wo wir die daten bekommen
  bookingsUrl :string = "/api/bookings";

  getBookings(): Observable<Booking[]>{
    var response = this.HttpClient.get<Booking[]>(this.bookingsUrl)
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking>{
    var response = this.HttpClient.delete<Booking>(this.bookingsUrl+"/"+booking.id);
    return response;
  }

  getBookingById(id:number):Observable<Booking>{
    var response = this.HttpClient.get<Booking>(this.bookingsUrl +"/"+id);
    return response;
  }

  addBooking(booking: Booking):Observable<Booking>{
    var response =this.HttpClient.post<Booking>(this.bookingsUrl, booking);
   return  response;
  }
}
