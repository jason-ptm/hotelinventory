import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { 
  //   path: '/rooms', loadChildren: () => import('./components/rooms/rooms.module').then(m => m.RoomsModule) 
  // }, 
  // { 
  //   path: '/rooms/room-list', loadChildren: () => import('./components/rooms/room-list/room-list.module').then(m => m.RoomListModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
