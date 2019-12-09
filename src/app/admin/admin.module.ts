import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPollsComponent } from './list-polls/list-polls.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
      ListPollsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ListPollsComponent
  ]
})
export class AdminModule { }
