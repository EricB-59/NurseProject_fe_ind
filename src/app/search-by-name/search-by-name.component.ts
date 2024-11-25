import { Component } from '@angular/core';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  data = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  name = this.data.name;
  age = this.data.age;
}
