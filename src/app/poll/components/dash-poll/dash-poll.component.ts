import { Component, OnInit, Input } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';

@Component({
  selector: 'dash-poll',
  templateUrl: './dash-poll.component.html',
  styleUrls: ['./dash-poll.component.scss']
})
export class DashPollComponent implements OnInit {
  @Input('typePoll') typePoll;

  email: string;
  dataPoll: any = [];

  constructor(
    private pollService: PollService
  ) { }

  ngOnInit() {
  }

  save(pollData, dataType) {
    this.dataPoll.push({
      email: this.email,
      poll1: `${dataType.poll1}: ${pollData.poll1}`,
      poll2: `${dataType.poll2}: ${pollData.poll2}`,
      poll3: `${dataType.poll3}: ${pollData.poll3}`,
      poll4: `${dataType.poll4}: ${pollData.poll4}`,
      poll5: `${dataType.poll5}: ${pollData.poll5}`
    });
    // console.log(this.dataPoll);
    this.pollService.sendPoll(this.dataPoll);
  }

}
