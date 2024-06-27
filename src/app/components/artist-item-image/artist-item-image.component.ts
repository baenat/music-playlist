import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artist-item-image',
  standalone: true,
  imports: [],
  templateUrl: './artist-item-image.component.html',
  styleUrl: './artist-item-image.component.scss'
})
export class ArtistItemImageComponent {

  @Input() imageSrc: string = '';
  @Input() artistName: string = '';
  @Output() click = new EventEmitter<void>();

  onclick = () => {
    this.click.emit();
  }

}
