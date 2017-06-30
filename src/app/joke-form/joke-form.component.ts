import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

	createJoke(setup: string, punchline: string) {
		this.jokeCreated.emit(new Joke(setup, punchline));
	}
  constructor() { }

  ngOnInit() {
  }

}

class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
