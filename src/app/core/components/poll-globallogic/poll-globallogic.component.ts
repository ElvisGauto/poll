import { Component, OnInit, ɵConsole } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-globallogic',
  templateUrl: './poll-globallogic.component.html',
  styleUrls: ['./poll-globallogic.component.scss']
})
export class PollGloballogicComponent implements OnInit {

  user$;
  typePoll$;

  email: string;
  uid: string;

  flag: boolean = true;

  dataPoll: any = [];



  constructor(
    private pollService: PollService,
    private authUser: AuthService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {
    this.user$ = this.authUser.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
      }
    })
    this.typePoll$ = this.pollService.getTypePolls(this.uid);
  }

  createPoll(): void {
    this.router.navigate(['admin/create-poll'])
  }
}
