import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PollService } from 'src/app/shared/services/poll.service';

@Component({
  selector: 'view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.scss']
})
export class ViewPollComponent implements OnInit {

  user$;
  typePoll$;

  email: string;
  uid: string;

  dataPolls = [];
  titlePoll = [];

  arrPollsOne = [];
  arrPollsTwo = [];

  arrAll: any = [];
  
  constructor(
    private auth: AuthService,
    private pollService: PollService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uid);
      this.typePoll$.subscribe(x => {
        this.arrAll = x;
      })
    })
  }

}
