import {Component, OnInit} from '@angular/core';
import {Member} from "../../Modules/member.model";
import {MemberService} from "../../Services/member.service";
import {MatDialog} from "@angular/material/dialog";
import {RemoveDialogComponent} from "../remove-dialog/remove-dialog.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'cin', 'type', 'cv', 'createdDate', 'action'];
  datasource: MatTableDataSource<Member>;

  constructor(private memberService: MemberService, public dialog: MatDialog) {
    this.datasource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  onRemove(id: string) {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {});

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.memberService.removeMemberById(id).then(() => this.getMembers())
      }
    });
  }

  getMembers() {
    this.memberService.getAllMembers().then((data) => this.datasource.data = data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  private fetchDataSource(): void {
    this.datasource.data = this.memberService.tab;
  }
}
