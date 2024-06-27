import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
