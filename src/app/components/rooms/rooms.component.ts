import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  title = 'Hotel Hilton'
  hideRooms: boolean = false;
  rooms!: Array<Room>;
  roomSelected!:Room;
  constructor() { }

  ngOnInit(): void {
    this.rooms = [];
  }

  addRoom() {
    this.rooms = [...this.rooms, {
      id: 4,
      roomType: 'Deluxe room',
      amenities: 'wi-fi, netflix, jacuzzi, terrace',
      checkOut: new Date(20/12/2022),
      checkIn: new Date(14/11/2022),
      price: 5500,
      photos: ['photo1, photo2'],
      rating: 3.8
    }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: Room){
    this.roomSelected = room
  }

}
