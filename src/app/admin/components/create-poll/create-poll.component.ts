import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/shared/services/poll.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {

  user$;
  typePoll$;

  uid: string;
  uidModify: string;
  title: string;
  iterador: string;
  flag: boolean = true;

  arrPoll: any = [];
  arrTitle: any = [];
  arrComplete: any = [];
  arrNewQuestion: any = [];

  constructor(
    private auth: AuthService,
    private pollService: PollService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid;
        this.uidModify = this.uid.slice(5, -5);
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uidModify);
      this.typePoll$.subscribe(data => {
        if(data.$value !== null) {
          this.arrComplete = data;
        }
      })
    })
    this.iterador = this.arrNewQuestion.length;
  }

  moreQuestion() {
    this.iterador = this.iterador + 1;
    this.arrNewQuestion.push(this.iterador);
  }

  add(poll) {
    this.arrTitle.push({
      title: poll.titlePoll
    });

    this.arrTitle.push(poll);
    delete this.arrTitle[1].titlePoll
    
    this.arrComplete.push(this.arrTitle);
    this.pollService.addPolls(this.uidModify, this.arrComplete);
    
    this.router.navigate(['/pollGloballogic']);
  }

}
