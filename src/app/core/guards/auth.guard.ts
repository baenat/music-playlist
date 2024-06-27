import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SpotifyService } from '../../shared/services/spotify.service';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }
  return new Promise( async (resolve) => {
    const user = await spotifyService.initializUser();
    if (user) {
      resolve(true);
    } else {
      localStorage.clear();
      router.navigate(['/login']);
      resolve(false);
    }
  });

};
