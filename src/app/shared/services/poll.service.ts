import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private db: AngularFireDatabase) { }

  sendPoll(pollData: string) {
    this.db.object(`/poll/`).update(pollData);
  }

  addPolls(uid: string, poll: string) {
    this.db.object(`/typePolls/${uid}/`).update(poll);
  }

  getPolls() {
    return this.db.list('/poll/');
  }

  getTypePolls(uid: string) {
    return this.db.object(`/typePolls/${uid}/`);
  }
}
