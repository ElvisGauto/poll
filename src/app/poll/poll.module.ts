import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashPollComponent } from './components/dash-poll/dash-poll.component';



@NgModule({
  declarations: [
    DashPollComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashPollComponent
  ]
})
export class PollModule { }
