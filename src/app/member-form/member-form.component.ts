import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: any;
  cin: any;
  name: any;
  type: any;
  cv: any;

  constructor() {
  }

  ngOnInit(): void {
    this.InitForm()
  }

  OnSub(value: FormGroup) {
    console.log(value)
  }

  InitForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      cv: new FormControl(null),
    });
  }
}
