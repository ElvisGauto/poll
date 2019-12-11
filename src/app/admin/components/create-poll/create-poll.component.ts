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
  title: string;
  iterador: string;

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
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uid);
      this.typePoll$.subscribe(x => {
        this.arrComplete = x;
      })
    })
    console.log(this.arrNewQuestion);
    this.iterador = this.arrNewQuestion.length;
    console.log(this.iterador);
  }

  moreQuestion() {
    this.iterador = this.iterador + 1;
    console.log(this.iterador);
    this.arrNewQuestion.push(this.iterador);
    console.log(this.arrNewQuestion);
  }

  add(poll) {
    this.arrTitle.push({
      title: poll.titlePoll
    });

    this.arrTitle.push(poll);
    delete this.arrTitle[1].titlePoll
    
    this.arrComplete.push(this.arrTitle);
    console.log(this.arrComplete);
    // this.arrPoll.push(poll);
    this.pollService.addPolls(this.uid, this.arrComplete);
    
    this.router.navigate(['/pollGloballogic']);
  }

}
