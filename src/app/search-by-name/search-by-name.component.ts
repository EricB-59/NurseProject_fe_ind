import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  users: any[] = jsonData;
}
