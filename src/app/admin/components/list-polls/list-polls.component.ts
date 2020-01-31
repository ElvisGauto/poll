import { Component, OnInit, Input } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AdminService } from '../../services/admin.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-polls',
  templateUrl: './list-polls.component.html',
  styleUrls: ['./list-polls.component.scss']
})
export class ListPollsComponent implements OnInit {

  @Input() position;
  @Input() uidModify;

  flagShowData = false;
  flag = false;

  display: boolean;

  listPolls = [];
  dataQuestion = [];
  arrDisplay = [];

  constructor(
    private pollService: PollService,
    private adminService: AdminService
    ) { }

  ngOnInit() {
    this.pollService.getPolls(this.uidModify, this.position).subscribe(data => {
      this.listPolls = data[2];
      this.dataQuestion = data[1];
    });
  }

  displayData(i) {
    this.display = true;
    this.arrDisplay.push({
      display: this.display
    });
    this.adminService.displayData(this.uidModify, this.position, i, this.arrDisplay[0]);
    this.arrDisplay = [];
  }

  hideData(i) {
    this.display = false;
    this.arrDisplay.push({
      display: this.display
    });
    this.adminService.displayData(this.uidModify, this.position, i, this.arrDisplay[0]);
    this.arrDisplay = [];
  }

}
