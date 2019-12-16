import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PollService } from 'src/app/shared/services/poll.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.scss']
})
export class ViewPollComponent implements OnInit {

  user$;
  typePoll$;
  typePollByIndex$;

  email: string;
  uid: string;
  uidModify: string;
  urlCopied: string;

  dataPolls = [];
  titlePoll = [];

  arrNewPoll = [];

  arrAll: any = [];
  
  constructor(
    private auth: AuthService,
    private pollService: PollService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
    this.user$.subscribe(user => {
      if(user) {
        this.email = user.email;
        this.uid = user.uid;
        this.uidModify = this.uid.slice(5, -5);
      }
      this.typePoll$ = this.pollService.getTypePolls(this.uidModify);
      this.typePoll$.subscribe(x => {
        this.arrAll = x;
      })
    })
  }
  goToPoll(i) {
    this.router.navigate([`/admin/encuesta/${this.uidModify}/${this.arrAll[i].$key}`]);
  }

  delete(i) {
    this.pollService.delete(this.uidModify, this.arrAll[i].$key);
  }

  copyPoll(i) {
    const inputShared = document.createElement('input');
    let routeUidName = `encuesta/${this.uidModify}/${this.arrAll[i].$key}`;

    let url = window.location.href;
    if(url.includes('pollGloballogic')) {
      this.urlCopied = url.replace('pollGloballogic', routeUidName);
    } 
    inputShared.value = this.urlCopied;     

    document.body.appendChild(inputShared);
    
    inputShared.focus();
    inputShared.select();

    document.execCommand('copy');
    document.body.removeChild(inputShared);
    
    alert('CV link has been copied');
  }
}
