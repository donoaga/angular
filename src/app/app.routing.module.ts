import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './pages/user-pages/dashboard/dashboard.component';
import {HomePageComponent} from './pages/main-page/home-page.component';
import {DashboardItemComponent} from './pages/user-pages/dashboard/items/dashboard/dashboard-item.component';
import {TableItemComponent} from './pages/user-pages/dashboard/items/table/table-item.component';
import {FormItemComponent} from './pages/user-pages/dashboard/items/form/form-item.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: '', redirectTo: 'dashboard-item', pathMatch: 'full'
            },
            {path: 'dashboard-item', component: DashboardItemComponent},
            {path: 'table-item', component: TableItemComponent},
            {path: 'form-item', component: FormItemComponent}
          ]
        }
      ],
      {
        anchorScrolling: 'enabled',
      }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

