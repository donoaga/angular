import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginDialogComponent} from './login-dialog/login.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {HomePageComponent} from './home-page.component';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    HomePageComponent,
    LoginDialogComponent,
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  exports: [
    HeaderComponent,
    LoginDialogComponent
  ],
  providers: []
})
export class MainPageModule {

}
