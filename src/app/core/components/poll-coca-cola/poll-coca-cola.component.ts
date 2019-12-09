import { Component, OnInit, ɵConsole } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-poll-coca-cola',
  templateUrl: './poll-coca-cola.component.html',
  styleUrls: ['./poll-coca-cola.component.scss']
})
export class PollCocaColaComponent implements OnInit {

  user$;
  typePoll$;

  email: string;

  flag: boolean = true;

  dataPoll: any = [];



  constructor(
    private pollService: PollService,
    private authUser: AuthService
    ) { }

  ngOnInit() {
    this.user$ = this.authUser.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.email = user.email;
      }
    })
    
    this.typePoll$ = this.pollService.getTypePolls();
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
