import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetComponent } from './components/bet/bet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
 
  {path:'', pathMatch:'full' ,redirectTo:'Dashboard'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Bet',component:BetComponent},
  {path:'**',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
