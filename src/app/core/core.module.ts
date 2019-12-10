import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PollGloballogicComponent } from './components/poll-globallogic/poll-globallogic.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AdminModule } from '../admin/admin.module';
import { FormsModule } from '@angular/forms';
import { PollModule } from '../poll/poll.module';


@NgModule({
  declarations: [
    LoginComponent,
    PollGloballogicComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    PollModule,
    AdminModule
  ],
  exports: [
    LoginComponent,
    PollGloballogicComponent,
  
  ]
})
export class CoreModule { }
