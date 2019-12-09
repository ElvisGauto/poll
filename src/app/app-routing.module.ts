import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { PollCocaColaComponent } from './core/components/poll-coca-cola/poll-coca-cola.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ListPollsComponent } from './admin/list-polls/list-polls.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pollCocaCola', component: PollCocaColaComponent, canActivate: [AuthGuardService] },
  { path: 'listPolls', component: ListPollsComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
