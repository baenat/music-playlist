import { Component } from '@angular/core';
import { ArtistItemImageComponent } from '../artist-item-image/artist-item-image.component';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { IArtist } from 'src/app/core/interfaces/IArtist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-artists',
  standalone: true,
  imports: [ArtistItemImageComponent, CommonModule],
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.scss'
})
export class TopArtistsComponent {

  artists: IArtist[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.searchTopArtists();
  }

  searchTopArtists = async () => {
    this.artists = await this.spotifyService.searchBestArtists(5);
  }

}
