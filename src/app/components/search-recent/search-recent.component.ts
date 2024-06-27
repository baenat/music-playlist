import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-recent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-recent.component.html',
  styleUrl: './search-recent.component.scss'
})
export class SearchRecentComponent {

  searchRecents = [
    'Top Colombia', 'Top Global', 'Hits', 'Mejores exitos'
  ];

  inputSearch: string = '';

  defineSearch = (search: string) => {
    this.inputSearch = search;
  }

  search = () => {

  }

}
