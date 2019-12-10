import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPollsComponent } from './components/list-polls/list-polls.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPollsComponent,
    CreatePollComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ListPollsComponent,
    CreatePollComponent
  ]
})
export class AdminModule { }
