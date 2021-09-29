import {Component, OnInit} from '@angular/core';
import {Member} from "../../Modules/member.model";
import {MemberService} from "../../Services/member.service";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cin', 'type', 'cv', 'createdDate'];
  datasource: Member[];

  constructor(private memberService: MemberService) {
    this.datasource = memberService.tab;
  }

  ngOnInit(): void {
  }

}
