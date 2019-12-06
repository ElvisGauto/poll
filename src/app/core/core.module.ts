import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { PollCocaColaComponent } from './components/poll-coca-cola/poll-coca-cola.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    PollCocaColaComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    PollCocaColaComponent
  ]
})
export class CoreModule { }
