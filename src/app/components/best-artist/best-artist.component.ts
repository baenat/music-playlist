import { Component } from '@angular/core';
import { IArtist } from 'src/app/core/interfaces/IArtist';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { newArtist } from 'src/app/shared/helpers/factories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-artist.component.html',
  styleUrl: './best-artist.component.scss'
})
export class BestArtistComponent {

  artist: IArtist = newArtist();

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.searchTopArtists();
  }

  searchTopArtists = async () => {
    const artists = await this.spotifyService.searchBestArtists(1);

    if (!!artists) {
      this.artist = artists.pop() ?? newArtist();
    }

    console.log('artists => ', artists)
  }

}
