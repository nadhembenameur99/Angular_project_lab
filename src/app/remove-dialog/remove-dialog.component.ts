import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent implements OnInit {
  title: any;
  message: any;

  constructor(public dialogRef: MatDialogRef<RemoveDialogComponent>,) {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
    this.title = "Delete Action";
    this.message = "Are you sure to delete this member?"
  }

}
