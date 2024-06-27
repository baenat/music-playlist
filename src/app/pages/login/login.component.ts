import { Component } from '@angular/core';
import { SpotifyService } from '../../shared/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.verificationTokenUrlCallback();
  }

  verificationTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();
    if (token) {
      this.spotifyService.defineAccessToken(token);
      this.router.navigate(['/player/home']);
    }
  }

  openPageLogin() {
    window.location.href = this.spotifyService.getUrlLogin();
  }

}
