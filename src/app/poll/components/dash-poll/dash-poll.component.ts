import { Component, OnInit, Input } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'dash-poll',
  templateUrl: './dash-poll.component.html',
  styleUrls: ['./dash-poll.component.scss']
})
export class DashPollComponent implements OnInit {
  user$;
  typePollByIndex$;

  dataPoll: any = [];
  allData: any = [];
  arrData: any = [];
  questionPoll: any = [];

  id: { 
    uidUser: string, 
    idPoll:string 
  };
  
  uid: string;
  emailUser: string;
  uidModify: string;
  flag: boolean = true;

  titlePoll: string;

  constructor(
    private pollService: PollService,
    private activateRoute: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = {
      uidUser: this.activateRoute.snapshot.params.uidUser,
      idPoll: this.activateRoute.snapshot.params.idPoll
    }
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid;
        this.emailUser = user.email;
      }
      this.typePollByIndex$ = this.pollService.getTypePollsByIndex(this.id.uidUser, this.id.idPoll);
      this.typePollByIndex$.subscribe(x => {
        this.titlePoll = x[0].title;
        this.questionPoll = x[1];
        this.allData = x[2];
      })
    })
  }

  save(pollData) {
    this.arrData.push({
     email: this.emailUser
    });

    this.arrData.push(pollData);
    if(this.allData === undefined) {
      this.allData = [];
      this.allData.push(this.arrData);
    } else {
      this.allData.push(this.arrData);
    }
    this.pollService.sendPoll(this.id.uidUser, this.id.idPoll, this.allData);

    if (!confirm('Gracias por completar la encuesta. Saludos!')) return;

    this.router.navigate(['/login']);
  }

}
