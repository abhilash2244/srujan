import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './module/auth/auth.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'auth', component: AuthComponent }, 
  { path: '', redirectTo: '/auth', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
