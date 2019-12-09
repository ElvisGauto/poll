import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PollCocaColaComponent } from './components/poll-coca-cola/poll-coca-cola.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AdminModule } from '../admin/admin.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    PollCocaColaComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    PollCocaColaComponent,
  
  ]
})
export class CoreModule { }
