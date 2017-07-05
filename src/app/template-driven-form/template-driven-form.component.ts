import { Component, OnInit ,ViewChild} from '@angular/core';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model: Signup = new Signup();
  @ViewChild('f') form: any;
  lang:string[] = ["English","French"];

  constructor() { 
  }
  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid)
    {
      console.log("Form Submitted");
      this.form.reset();
    }
  }

}
class Signup {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public language: string = '') {
  }
}
