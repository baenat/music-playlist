import { Component } from '@angular/core';
import { SearchRecentComponent } from '../search-recent/search-recent.component';
import { TopArtistsComponent } from '../top-artists/top-artists.component';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-side-bar-right',
  standalone: true,
  imports: [SearchRecentComponent, TopArtistsComponent, PlayerCardComponent],
  templateUrl: './side-bar-right.component.html',
  styleUrl: './side-bar-right.component.scss'
})
export class SideBarRightComponent {

}
