import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassetsComponent } from './common/addassets/addassets.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'home', component: HomeComponent,
  children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'addassets', component: AddassetsComponent },
    { path: '**', redirectTo: 'dashboard' }
  ] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
