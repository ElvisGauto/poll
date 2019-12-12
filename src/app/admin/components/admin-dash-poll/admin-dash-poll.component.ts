import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from 'src/app/shared/services/poll.service';

@Component({
  selector: 'app-admin-dash-poll',
  templateUrl: './admin-dash-poll.component.html',
  styleUrls: ['./admin-dash-poll.component.scss']
})
export class AdminDashPollComponent implements OnInit {
  user$;
  typePollByIndex$;

  questionPoll: any = [];
  arrNewQuestion: any = [];
  arrComplete: any = [];

  arrTitle: any = [];
  arrPolls: any = [];

  id: { 
    uidUser: string, 
    idPoll:string 
  };
  
  uid: string;
  titlePoll: string;
  iterator: number;

  constructor(
    private auth: AuthService,
    private activateRoute: ActivatedRoute,
    private pollService: PollService,
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
      }
      this.typePollByIndex$ = this.pollService.getTypePollsByIndex(this.id.uidUser, this.id.idPoll);
      this.typePollByIndex$.subscribe(x => {
        this.titlePoll = x[0].title;
        this.questionPoll = x[1];
        this.iterator = Object.keys(this.questionPoll).length;
      })
    })
  }

  moreQuestion() {
    this.iterator = this.iterator + 1;
    this.arrNewQuestion.push(this.iterator);
  }

  save(poll) {
    this.arrTitle.push({
      title: poll.title
    });
    this.arrPolls.push(poll);
    delete this.arrPolls[0].title
    this.pollService.addByPolls(this.id.uidUser, this.id.idPoll, '0', this.arrTitle[0]);
    this.pollService.addByPolls(this.id.uidUser, this.id.idPoll, '1', this.arrPolls[0]);
    
    this.router.navigate(['/pollGloballogic']);
  }

}
