import { Component } from '@angular/core';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/core/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/shared/services/spotify.service';
import { CommonModule } from '@angular/common';
import { UserFootComponent } from '../user-foot/user-foot.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MenuButtonComponent, FontAwesomeModule, CommonModule, UserFootComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic;

  menuSelected = 'Home';

  playlists: IPlaylist[] = [];

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.searchPlaylist();
  }

  buttonClick = (button: string) => {
    this.menuSelected = button;
    this.router.navigateByUrl('player/home');
  }

  goToPlaylist(playlistId: string){
    this.menuSelected = playlistId;
    this.router.navigateByUrl(`player/list/playlist/${playlistId}`)
  }

  searchPlaylist = async () => {
    this.playlists = await this.spotifyService.searchPlaylistUser();
    console.log('playlists => ', this.playlists)
  }

}
