import { IArtist } from "src/app/core/interfaces/IArtist"
import { IPlaylist } from "src/app/core/interfaces/IPlaylist"
import { ISongs } from "src/app/core/interfaces/ISongs"

export function newArtist(): IArtist {
  return {
    id: '',
    name: '',
    imageUrl: '',
    music: []
  }
}

export function newMusica(): ISongs {
  return {
    id: '',
    album: {
      id: '',
      imageUrl : '',
      name: '',
    },
    artists: [],
    time: '',
    title: ''
  }
}

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    imageUrl: '',
    name: '',
    music: []
  }
}
