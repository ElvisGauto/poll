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
  arrDeletePoll: any = [];
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
  position: string;
  uidModify: string;
  flag: boolean = true;

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

    this.position = this.id.idPoll;
    this.uidModify = this.id.uidUser;

    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid;
      }
      this.typePollByIndex$ = this.pollService.getTypePollsByIndex(this.uidModify, this.position);
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

  // removeQuestion(i) {
  //   console.log(i);
    // this.arrDeletePoll.push(data);
    // console.log(this.arrDeletePoll);
    // this.arrDeletePoll.splice( this.arrDeletePoll.indexOf(1), 1 );
    // console.log(this.arrDeletePoll);
    // this.pollService.removePolls(this.uid, this.position, key);
  // }

  save(poll) {
    this.arrTitle.push({
      title: poll.title
    });
    this.arrPolls.push(poll);
    delete this.arrPolls[0].title
    this.pollService.addByPolls(this.uidModify, this.position, '0', this.arrTitle[0]);
    this.pollService.addByPolls(this.uidModify, this.position, '1', this.arrPolls[0]);
    
    this.router.navigate(['/pollGloballogic']);
  }

}
