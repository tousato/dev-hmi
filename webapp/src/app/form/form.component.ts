import { Component } from "@angular/core";
import { FormGroup, FormControl,
         FormBuilder, Validators } from '@angular/forms';
import { HhaService } from './hha.service';

@Component({
  selector: "hero-parent",
  providers: [ HhaService ],
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <input type="date" [formControl]="myForm.controls.date">
      <input type="submit" [routerLink]="['./pages', 1]" value="送信" />
      <hr/>
    </form>

    <hero-child [master]="master"></hero-child>
  `
})
export class FormComponent {
  master: string = 'Master';
  url = '';
  count = 0;
  comments: string[] = [];
  sei : string;
  mei : string;
  
  myForm = this.builder.group({
    date: new FormControl('',[
    ])
  }); 

  constructor(private builder: FormBuilder, private hha:HhaService) { }
  result = {};

  ngOnInit() { 
    
  } 

  onSubmit() {
    console.log('日付：' + this.myForm.controls['date'].value);
    this.master = this.myForm.controls['date'].value;

    this.hha.getMizuho((response) => {
      console.log("result:" + response.data);
    });
  }
}
