import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { PollGloballogicComponent } from './core/components/poll-globallogic/poll-globallogic.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ListPollsComponent } from './admin/components/list-polls/list-polls.component';
import { CreatePollComponent } from './admin/components/create-poll/create-poll.component';
import { DashPollComponent } from './poll/components/dash-poll/dash-poll.component';
import { AdminDashPollComponent } from './admin/components/admin-dash-poll/admin-dash-poll.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pollGloballogic', component: PollGloballogicComponent, canActivate: [AuthGuardService] },

  { path: 'admin/list-polls', component: ListPollsComponent },
  { path: 'admin/create-poll', component: CreatePollComponent },
  { path: 'admin/encuesta/:uidUser/:idPoll', component: AdminDashPollComponent, canActivate: [AuthGuardService]},

  { path: 'encuesta/:uidUser/:idPoll', component: DashPollComponent, canActivate: [AuthGuardService]},

  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
