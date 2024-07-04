import { Component, inject } from '@angular/core';
import { SearchRecentComponent } from '../search-recent/search-recent.component';
import { TopArtistsComponent } from '../top-artists/top-artists.component';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerService } from 'src/app/shared/services/player.service';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica } from 'src/app/shared/helpers/factories';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar-right',
  standalone: true,
  imports: [CommonModule, SearchRecentComponent, TopArtistsComponent, PlayerCardComponent],
  templateUrl: './side-bar-right.component.html',
  styleUrl: './side-bar-right.component.scss'
})
export class SideBarRightComponent {

  playerService = inject(PlayerService);
  destroy$ = new Subject<void>();
  musicPlay$ = new Observable<ISongs>();

  ngOnInit(): void {
    this.getSongPlay();
  }

  getSongPlay = () => {
    this.musicPlay$ = this.playerService.currentSong$;
  }

}
