import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';

@Component({
  selector: 'app-list-polls',
  templateUrl: './list-polls.component.html',
  styleUrls: ['./list-polls.component.scss']
})
export class ListPollsComponent implements OnInit {

  flag: boolean = false;

  listPolls = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().subscribe(data => {
      this.listPolls = data;
    })
  }

}
