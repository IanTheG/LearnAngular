import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { CallbackComponent } from './views/callback/callback.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dj',
    component: DashboardComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
