import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from "../app.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  animalNameFormControl = new FormControl('');


  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  OnOkClick(): void {
    this.dialogRef.close(this.animalNameFormControl.value);
  }
}
