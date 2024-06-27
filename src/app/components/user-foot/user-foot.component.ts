import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/core/interfaces/IUsuario';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-user-foot',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-foot.component.html',
  styleUrl: './user-foot.component.scss'
})
export class UserFootComponent {

  logoutIcon = faSignOutAlt;
  usuario!: IUsuario;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }

  logout = () => {
    this.spotifyService.logout();
  }

}
