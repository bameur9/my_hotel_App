import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import {Router, ActivatedRoute} from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  //Standard werte
  booking: Booking ={
    id: 100,
  name: "Room",
  roomNumber: 100,
  startDate: new Date(),
  endDate: new Date()
  };

  isEdit = false;

  constructor(private bookingService: BookingService,
    private router:Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Nur wenn es nicht um create handelt.
    if(this.router.url != '/create'){
    this.isEdit = true;
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    var bookingById = this.bookingService.getBookingById(id).subscribe((result) => {
      this.booking = result;
    });
  }
  }

  save():void{
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean){
    var val = (event.target as HTMLInputElement).value;

    if(isStart){
      this.booking.startDate = new Date(val);
    }else {
      this.booking.endDate = new Date(val);
    }
  }

}
