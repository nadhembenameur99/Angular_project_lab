import {Component, OnInit} from '@angular/core';
import {Member} from "../../Modules/member.model";
import {MemberService} from "../../Services/member.service";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cin', 'type', 'cv', 'createdDate', 'action'];
  datasource: Member[] = [];

  constructor(private memberService: MemberService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  private fetchDataSource(): void {
    this.datasource = this.memberService.tab;
  }

  onRemove(id: string) {
    const dialogRef = this.dialog.open(RemoveDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.memberService.removeMemberById(id).then(() => this.datasource = this.memberService.tab)
      }
    });
  }

}
