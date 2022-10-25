import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges  } from '@angular/core';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() rooms: Array<Room> = [];
  @Output() roomSelect = new EventEmitter<Room>();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
  }

  selectRoom(room: Room) {
    this.roomSelect.emit(room);
  }

}
