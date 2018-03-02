import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginModalComponent } from '../global-header/login-modal/login-modal.component';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {
  email: string
  password: string
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginModalComponent, {
      width: '250px',
      data: {
        email: this.email,
        password: this.password
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(`The dialog was closed ${data}`);
    });
  }
}