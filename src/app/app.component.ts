import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './components/rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('divReference', { static: true }) divRef!: ElementRef;
  ngOnInit(): void {
    this.divRef.nativeElement.innerText = 'Hotel Paris!';
  }

  // @ViewChild(RoomsComponent) roomsComponent!: RoomsComponent;
  // @ViewChild('template', { read: ViewContainerRef }) vcr !: ViewContainerRef;

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // // this.roomsComponent.title = 'Hotel paris'
    // componentRef.instance.title = 'Hotel paris'
  }
}
