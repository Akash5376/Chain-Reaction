import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from '../game-board/game-board.component';

const routes: Routes = [
  {path: 'Board', component:GameBoardComponent}
];
export const appRoutes = routes; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
