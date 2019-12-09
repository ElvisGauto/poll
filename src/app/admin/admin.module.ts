import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPollsComponent } from './list-polls/list-polls.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListPollsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListPollsComponent
  ]
})
export class AdminModule { }
