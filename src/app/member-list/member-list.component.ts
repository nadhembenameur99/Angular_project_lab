import {Component, OnInit} from '@angular/core';
import {Member} from "../../Modules/member.model";
import {MemberService} from "../../Services/member.service";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cin', 'type', 'cv', 'createdDate', 'action'];
  datasource: Member[] = [];

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  private fetchDataSource(): void {
    this.datasource = this.memberService.tab;
  }

  onRemove(id: string) {
    this.memberService.removeMemberById(id).then(() => this.datasource = this.memberService.tab)
  }

}
