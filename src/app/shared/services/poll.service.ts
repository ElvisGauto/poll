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

  getPolls() {
    return this.db.list('/poll/');
  }

  getTypePolls() {
    return this.db.object('/typePolls/');
  }
}
