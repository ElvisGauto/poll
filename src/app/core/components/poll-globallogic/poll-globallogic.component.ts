import { Component, OnInit, ɵConsole } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-poll-globallogic',
  templateUrl: './poll-globallogic.component.html',
  styleUrls: ['./poll-globallogic.component.scss']
})
export class PollGloballogicComponent implements OnInit {

  user$;
  typePoll$;
  getUser$;

  email: string;
  uid: string;
  uidModify: string;

  flag: boolean = true;

  dataPoll: any = [];



  constructor(
    private pollService: PollService,
    private authUser: AuthService,
    public dialog: MatDialog,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.user$ = this.authUser.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
        this.uidModify = this.uid.slice(5, -5);
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uidModify);

      this.getUser$ = this.userService.getUser(this.uid);
      this.getUser$.subscribe(x => {
        console.log(x.admin);
      })
    })
  }

  createPoll(): void {
    this.router.navigate(['admin/create-poll'])
  }
}
