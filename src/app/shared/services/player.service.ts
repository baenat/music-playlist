import { Injectable } from '@angular/core';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica } from '../helpers/factories';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private currentMusic = new BehaviorSubject<ISongs>(newMusica());
  timerId: any = null;

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.getCurrentMusic();
  }

  // Getter para obtener el valor del BehaviorSubject
  get currentSong$(): Observable<ISongs> {
    return this.currentMusic.asObservable();
  }

  // Setter para actualizar el valor del BehaviorSubject
  set currentSong(music: ISongs) {
    this.currentMusic.next(music);
  }

  getCurrentMusic = async () => {
    clearInterval(this.timerId);

    const music = await this.spotifyService.getCurrentMusic();
    // this.currentSong = music;

    this.timerId = setInterval( async () => {
      await this.getCurrentMusic();
    }, 5000);
  }

  previousMusic = () => {
    this.spotifyService.previousMusic();
  }

  stopMusic = () => {
    this.spotifyService.stopMusic();
  }

  resumeMusic = () => {
    this.spotifyService.resumeMusic();
  }

  nextMusic = () => {
    this.spotifyService.nextMusic();
  }

}
