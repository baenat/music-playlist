import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule),
    canMatch: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'player'
  }
];
