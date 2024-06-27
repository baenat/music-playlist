import { Injectable } from '@angular/core';
import { spotifyConfiguration } from '../../../environments/environment.development';
import Spotify from 'spotify-web-api-js'
import { SinglePlaylist, artistSpotify, playlistSpotify, tracksSpotify, userSpotify } from '../helpers/spotifyHelper';
import { IUsuario } from '../../core/interfaces/IUsuario';
import { IPlaylist } from 'src/app/core/interfaces/IPlaylist';
import { Router } from '@angular/router';
import { IArtist } from 'src/app/core/interfaces/IArtist';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica, newPlaylist } from '../helpers/factories';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi!: Spotify.SpotifyWebApiJs;
  usuario!: IUsuario;
  artists!: IArtist;

  constructor(
    private router: Router
  ) {
    this.spotifyApi = new Spotify;
  }

  initializUser = async () => {
    if (!!this.usuario) {
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.defineAccessToken(token);
      await this.getUserSpotify();
      return !!this.usuario;
    } catch (error) {
      return false;
    }

  }

  getUserSpotify = async () => {
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = userSpotify(userInfo);
  }

  getUrlLogin = () => {
    const authEndpoint = `${spotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenUrlCallback = () => {
    if (!window.location.hash) {
      return '';
    }

    const params = window.location.hash.substring(1).split('&');
    const token = params[0].split('=')[1];

    return token;
  }

  defineAccessToken = (token: string) => {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  searchPlaylistUser = async (offset = 0, limit = 50): Promise<IPlaylist[]> => {
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
    return playlists.items.map(playlistSpotify);
  }

  searchPlaylist = async (playlistId: string, offset = 0, limit = 50) => {
    const playlists = await this.spotifyApi.getPlaylist(playlistId, { offset, limit});
    if (!playlists) {
      return null;
    }
    const playlist = SinglePlaylist(playlists);
    const musicSpotify = await this.spotifyApi.getPlaylistTracks(playlistId, { offset, limit });
    playlist.music = musicSpotify.items.map(musica => tracksSpotify(musica.track as SpotifyApi.TrackObjectFull))

    return playlist;
  }

  searchBestArtists = async (limit = 10): Promise<IArtist[]> => {
    const artists = await this.spotifyApi.getMyTopArtists({ limit });
    return artists.items.map(artistSpotify);
  }

  searchSongs = async (offset = 0, limit = 50): Promise<ISongs[]> => {
    const songs = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return songs.items.map(i => tracksSpotify(i.track));
  }

  playMusic = async (musicId: string) => {
    await this.spotifyApi.queue(musicId);
    await this.spotifyApi.skipToNext();
  }

  getCurrentMusic = async (): Promise<ISongs> => {
    const music = await this.spotifyApi.getMyCurrentPlayingTrack();
    if (music.item !== null) {
      return tracksSpotify(music.item);
    }
    return newMusica();
  }

  previousMusic = () => {
    this.spotifyApi.skipToPrevious();
  }

  stopMusic = () => {
    // this.spotifyApi.();
  }

  resumeMusic = () => {
    this.spotifyApi.play();
  }

  nextMusic = () => {
    this.spotifyApi.skipToNext();
  }

  logout = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
