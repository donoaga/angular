import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginDialogComponent} from '../login-dialog/login.dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  template: `
      <div class="header-block">
          <mat-nav-list class="nav-list">
              <a mat-list-item routerLink="." fragment="Section1">item 1</a>
              <a mat-list-item routerLink="." fragment="Section2">item 2</a>
              <a mat-list-item routerLink="." fragment="Section3">item 3</a>
          </mat-nav-list>
          <button mat-flat-button color="primary" class="login-button" (click)="openDialog()">
              Login
          </button>
      </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/auth/login']).then(x => {
      location.reload();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.router.navigate(['/dashboard']);
    });
  }
}
