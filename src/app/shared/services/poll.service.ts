import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private db: AngularFireDatabase) { }

  sendPoll(uid:string, position: string, pollData: string) {
    this.db.object(`/typePolls/${uid}/${position}`).update(pollData);
  }

  addPolls(uid: string, poll: string) {
    this.db.object(`/typePolls/${uid}/`).update(poll);
  }

  addByPolls(uid: string, position1: string, position2: string, poll: string) {
    this.db.object(`/typePolls/${uid}/${position1}/${position2}`).update(poll);
  }

  delete(uid: string, position1: string) {
    this.db.object(`/typePolls/${uid}/${position1}`).remove();
  }

  getPolls() {
    return this.db.list('/poll/');
  }

  getTypePolls(uid: string) {
    return this.db.object(`/typePolls/${uid}/`);
  }

  getTypePollsByIndex(uid: string, index: string) {
    return this.db.object(`/typePolls/${uid}/${index}`);
  }
}
