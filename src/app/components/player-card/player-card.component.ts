import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { ISongs } from 'src/app/core/interfaces/ISongs';
import { newMusica } from 'src/app/shared/helpers/factories';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {

  musicPlay: ISongs = newMusica();
  private destroy$ = new Subject<void>();

  previousIcon = faStepBackward;
  stopIcon = faPause;
  playIcon = faPlay;
  nextIcon = faStepForward;
  resumeIcon = this.stopIcon
  closeIcon = faClose;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.getSongPlay();
  }

  getSongPlay = () => {
    this.playerService.currentSong$.pipe(takeUntil(this.destroy$)).subscribe(music => {
      this.musicPlay = music
    });
  }

  previousMusic = () => {
    this.playerService.previousMusic();
  }

  resumeMusic = () => {
    this.playerService.resumeMusic();
    this.resumeIcon = (this.resumeIcon === this.playIcon) ? this.stopIcon : this.playIcon;
  }

  nextMusic = () => {
    this.playerService.nextMusic();
  }

  closePlayerMusic = () => {
    this.playerService.currentSong = newMusica();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
