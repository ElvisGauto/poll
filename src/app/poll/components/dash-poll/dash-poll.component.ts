import { Component, OnInit, Input } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dash-poll',
  templateUrl: './dash-poll.component.html',
  styleUrls: ['./dash-poll.component.scss']
})
export class DashPollComponent implements OnInit {
  user$;
  typePollByIndex$;
  responseValues$;

  dataPoll: any = [];
  allData: any = [];
  arrData: any = [];
  questionPoll: any = [];
  arrResponseValues: any = [];

  id: {
    uidUser: string,
    idPoll: string
  };

  uid: string;
  emailUser: string;
  uidModify: string;
  flag = true;
  poll: string;

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
    };
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.emailUser = user.email;
      }
      this.typePollByIndex$ = this.pollService.getTypePollsByIndex(this.id.uidUser, this.id.idPoll);
      this.typePollByIndex$.subscribe(x => {
        console.log(x[1].poll1);
      });
      this.typePollByIndex$.subscribe(x => {
        console.log(x);
        this.titlePoll = x[0].title;
        this.questionPoll = x[1];
        this.poll = this.questionPoll.poll1;

        this.allData = x[2];
      });
    });

    this.responseValues$ = this.pollService.getResponseValues();
    this.responseValues$.subscribe(x => {
      this.arrResponseValues = x;
    });

  }

  next() {

  }

  save(pollData) {
    const dataObj = new Date().toISOString().replace('T', ' ').slice(0, -5);
    const date = dataObj;

    this.arrData.push({
      email: this.emailUser,
      // tslint:disable-next-line:object-literal-shorthand
      date: date
    });

    this.arrData.push(pollData);
    // console.log(this.arrData[0].poll1);
    if (this.allData === undefined) {
      this.allData = [];
      this.allData.push(this.arrData);
    } else {
      this.allData.push(this.arrData);
    }

    this.arrData.push({
      display: false
    });
    this.pollService.sendPoll(this.id.uidUser, this.id.idPoll, this.allData);

    // tslint:disable-next-line:curly
    if (!confirm('Gracias por completar la encuesta. Saludos!')) return;

    this.router.navigate(['/login']);
  }

}
