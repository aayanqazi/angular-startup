import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-reactivemodelform',
  templateUrl: './reactivemodelform.component.html',
  styleUrls: ['./reactivemodelform.component.css']
})
export class ReactivemodelformComponent implements OnInit {
  searchField: FormControl;
  searcher: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges.debounceTime(400).subscribe(term => {
      this.searcher.push(term)
    })

  }

}
