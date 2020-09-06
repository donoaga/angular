import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginDialogComponent} from './login-dialog/login.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {HomePageComponent} from './home-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    HeaderComponent,
    HomePageComponent,
    LoginDialogComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  entryComponents: [LoginDialogComponent]
  , providers: []
})
export class MainPageModule {

}
