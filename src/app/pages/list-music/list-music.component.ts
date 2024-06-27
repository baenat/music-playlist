import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { SideBarRightComponent } from 'src/app/components/side-bar-right/side-bar-right.component';
import { IPlaylist } from 'src/app/core/interfaces/IPlaylist';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica, newPlaylist } from 'src/app/shared/helpers/factories';
import { PlayerService } from 'src/app/shared/services/player.service';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-list-music',
  standalone: true,
  imports: [FontAwesomeModule, BannerComponent, CommonModule, SideBarRightComponent],
  templateUrl: './list-music.component.html',
  styleUrl: './list-music.component.scss'
})
export class ListMusicComponent {

  bannerImageUrl = '';
  bannerText = '';
  title = '';

  playlistMusic: ISongs[] = [];
  musicCurrent: ISongs = newMusica();
  playIcon = faPlay;

  private destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getListMusic();
  }

  getListMusic = () => {
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy$)).subscribe(async params => {
      const type = params.get('type') ?? '';
      const id = params.get('id') ?? '';
      await this.getParamsRouter(type, id);
    });
  }

  getParamsRouter = async (type: string, id: string) => {
    if (type === 'playlist') {
      this.getDataPlaylist(id);
    } else {
      this.getDataArtist(id);
    }
  }

  getDataPlaylist = async (playlistId: string) => {
    const playlistMusic = await this.spotifyService.searchPlaylist(playlistId) ?? newPlaylist();
    this.defineDatosPagina(playlistMusic?.name, playlistMusic?.imageUrl, playlistMusic?.music ?? []);
    this.title = 'Musicas Playlist: ' + playlistMusic?.name;
  }

  getDataArtist = async (artistId: string) => {

  }

  defineDatosPagina(bannerTexto: string, bannerImage: string, music: ISongs[]) {
    this.bannerImageUrl = bannerImage;
    this.bannerText = bannerTexto;
    this.playlistMusic = music;
  }

  getArtists = (songs: ISongs) => {
    return songs.artists.map(artist => artist.name).join(', ');
  }

  async executarMusica(music: ISongs) {
    this.playerService.currentSong = music;
    await this.spotifyService.playMusic(music.id);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
