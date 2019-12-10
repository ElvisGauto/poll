import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  user$;

  uid: string;

  constructor(
    private auth: AuthService,
    private pollService: PollService
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;

    this.user$.subscribe(x => {
      if(x) {
        this.uid = x.uid;
      }
    })
  }

  add(poll) {
    this.pollService.addPolls(this.uid, poll);
  }

}
