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
  uidName: string;
  title: string;
  iterador: string;
  flag: boolean = true;
  iterator: string;

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
        this.uidName = user.displayName + this.uidModify;
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uidModify);
      this.typePoll$.subscribe(data => {
        this.iterator = data.length;
        if(data.$value !== null) {
          this.arrComplete = data;
        }
      })
    })
  }

  moreQuestion() {
    this.iterador = this.iterador + 1;
    this.arrNewQuestion.push(this.iterador);
  }

  removeQuestion(i) {
    this.arrNewQuestion.splice( this.arrNewQuestion.indexOf(i), 1 );
  }

  add(poll) {
    // this.iterator = this.iterator * 284;
    // console.log(this.iterator);
    // let pancho = this.iterator.concat(String(2*876));
    // console.log(pancho);
    this.arrTitle.push({
      title: poll.titlePoll
    });

    this.arrTitle.push(poll);
    delete this.arrTitle[1].titlePoll
    this.pollService.addPolls(this.uidModify,`poll${this.iterator}` , this.arrTitle);
    
    this.router.navigate(['/pollGloballogic']);
  }

}
