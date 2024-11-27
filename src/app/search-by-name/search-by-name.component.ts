import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import jsonData from '../data/DATA.json';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  // User data from src/app/data/DATA.json
  users: any[] = jsonData;

  searchName = new FormGroup({
    name: new FormControl(''),
  });

  searched: boolean = false;
  nameSearched: string = '';

  submitSearch() {
    this.searched = false;
    this.nameSearched = '';

    this.users.forEach((value) => {
      if (this.searchName.value.name === value.first_name) {
        this.searched = true;
        this.nameSearched = value.first_name;
      }
    });

    if (!this.searched) {
      console.log('No se encontró el nombre');
    }
  }
}
