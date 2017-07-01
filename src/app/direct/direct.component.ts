import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  constructor() { }
  people: any[] = [
    {
      "name": "Douglas Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod Mueller",
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';

    }
  }
  ngOnInit() {
  }

}
