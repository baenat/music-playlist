import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-player',
    standalone: true,
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss',
    imports: [SideBarComponent, RouterOutlet]
})
export class PlayerComponent {

}
