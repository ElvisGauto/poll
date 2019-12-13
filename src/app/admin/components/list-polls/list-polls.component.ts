import { Component, OnInit, Input } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';

@Component({
  selector: 'list-polls',
  templateUrl: './list-polls.component.html',
  styleUrls: ['./list-polls.component.scss']
})
export class ListPollsComponent implements OnInit {

  @Input('position') position;
  @Input('uidModify') uidModify;


  flag: boolean = false;

  listPolls = [];
  dataQuestion = [];

  constructor(
    private pollService: PollService
    ) { }

  ngOnInit() {
    this.pollService.getPolls(this.uidModify, this.position).subscribe(data => {
      this.listPolls = data[2];
      this.dataQuestion = data[1];
    })
  }

}
