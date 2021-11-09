import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../Services/member.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Member} from "../../Modules/member.model";

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
  currentId: any;
  item1: any;

  constructor(private memberService: MemberService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentId) {
      console.log(this.currentId);
      this.memberService.getMemberById(this.currentId).then((item) => {
        this.item1 = item;
        console.log(this.currentId);
        this.InitForm(this.item1)
      });
    } else {
      this.InitForm(null);
    }
  }

  OnSub(value: FormGroup) {
    const MemberToSave: Member = {...this.item1, ...value};
    this.memberService.saveMember(MemberToSave).then
    (() => this.router.navigate(['./members']));
  }

  InitForm(item: any): void {
    this.form = new FormGroup({
      cin: new FormControl(item?.cin, [Validators.required]),
      name: new FormControl(item?.name, [Validators.required]),
      type: new FormControl(item?.type, [Validators.required]),
      cv: new FormControl(item?.cv, [Validators.required]),
    });
  }
}
