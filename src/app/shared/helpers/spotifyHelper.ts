import { IPlaylist } from "src/app/core/interfaces/IPlaylist"
import { IUsuario } from "../../core/interfaces/IUsuario"
import { IArtist } from "src/app/core/interfaces/IArtist"
import { ISongs } from "src/app/core/interfaces/ISongs"
import { newMusica, newPlaylist } from "./factories"
import { addMilliseconds, format } from "date-fns"

export const userSpotify = (user: SpotifyApi.CurrentUsersProfileResponse): IUsuario => {
  return {
    id: user.id,
    name: user.display_name ?? '',
    imageUrl: user.images?.pop()?.url ?? ''
  }
}

export const playlistSpotify = (playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist => {
  return {
    id: playlist.id,
    name: playlist.name ?? '',
    imageUrl: playlist.images?.pop()?.url ?? ''
  }
}

export function SinglePlaylist(playlist: SpotifyApi.SinglePlaylistResponse ): IPlaylist {
  if (!playlist)
    return newPlaylist();

  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images?.pop()?.url ?? '',
    music: []
  }

}

export const artistSpotify = (artist: SpotifyApi.ArtistObjectFull): IArtist => {
  return {
    id: artist.id,
    name: artist.name,
    imageUrl: artist.images.sort((a: any, b: any) => a.width - b.width).pop()?.url ?? '',
  }
}

export const tracksSpotify = (songTrack: SpotifyApi.TrackObjectFull): ISongs => {
  if (!songTrack)
    return newMusica();

  const msParaMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }

  return {
    id: songTrack.uri,
    title: songTrack.name,
    album: {
      id: songTrack.id,
      imageUrl: songTrack.album.images.shift()?.url,
      name: songTrack.album.name
    },
    artists: songTrack.artists.map(artista => ({
      id: artista.id,
      name: artista.name
    })),
    time: msParaMinutos(songTrack.duration_ms),
  }
}

