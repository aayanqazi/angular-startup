import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule , ReactiveFormsModule
}   from '@angular/forms';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { DirectComponent } from './direct/direct.component';
import { CcCardColorDirective } from './cc-card-color.directive';
import { FormComponent } from './form/form.component';
import { DefaultPipe } from './default.pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CleanPipePipe } from './clean-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    DirectComponent,
    CcCardColorDirective,
    FormComponent,
    DefaultPipe,
    PipeExampleComponent,
    CleanPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
