import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent implements OnInit {
  public lang:string[];
  myForm:FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() {
    this.lang=[
      "English",
      "French",
      "German"
    ];
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // this.myForm = new FormGroup({
    //   name: new FormGroup({
    //     firstName:new FormControl('',Validators.required),
    //     lastName: new FormControl('',Validators.required)
    //   }),
    //   email: new FormControl("",[
    //     Validators.required,
    //     Validators.pattern("[^ @]*@[^ @]*")
    //   ]),
    //   password: new FormControl('',[
    //     Validators.required,
    //     Validators.maxLength(8)
    //   ]),
    //   language: new FormControl()
    // });
  }

  createFormControls(){
    this.firstName = new FormControl('',Validators.required);
    this.lastName =  new FormControl('',Validators.required);
    this.email = new FormControl('',[
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('',[
      Validators.required,
      Validators.maxLength(8)
    ]);
    this.language = new FormControl('',Validators.required)
  }
  createForm(){
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email:this.email,
      password: this.password,
      language:this.language
    })
  }

}
