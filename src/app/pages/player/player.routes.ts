import { Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { HomeComponent } from "../home/home.component";
import { ListMusicComponent } from "../list-music/list-music.component";

export const PlayerRoutes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'list/:type/:id',
        component: ListMusicComponent
      }
    ]
  }
]
