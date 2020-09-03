import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {DashboardComponent} from './pages/user-pages/components/dashboard/dashboard.component';
import {HomePageComponent} from './pages/main-page/home-page.component';

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
          canActivate: [AuthGuard]
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

