import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { BestArtistComponent } from 'src/app/components/best-artist/best-artist.component';
import { SideBarRightComponent } from 'src/app/components/side-bar-right/side-bar-right.component';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica } from 'src/app/shared/helpers/factories';
import { PlayerService } from 'src/app/shared/services/player.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BestArtistComponent, SideBarRightComponent, CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  songs!: ISongs[];
  artists!: string;
  currentMusic: ISongs = newMusica();

  playIcon = faPlay;

  private destroy$ = new Subject<void>();

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getSongs();
    this.getCurrentMusic();
  }

  getSongs = async () => {
    this.songs = await this.spotifyService.searchSongs();
  }

  getArtists = (songs: ISongs) => {
    return songs.artists.map(artist => artist.name).join(', ');
  }

  playMusic = async (music: ISongs) => {
    this.playerService.currentSong = music;
    await this.spotifyService.playMusic(music.id);
  }

  getCurrentMusic = () => {
    this.playerService.currentSong$.pipe(takeUntil(this.destroy$)).subscribe(music => {
      this.currentMusic = music;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
