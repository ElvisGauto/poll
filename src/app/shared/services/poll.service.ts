import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private db: AngularFireDatabase) { }

  sendPoll(uid:string, position: string, pollData: string) {
    this.db.object(`/typePolls/${uid}/${position}/2/`).update(pollData);
  }

  addPolls(uid: string, uidName: string,poll: string) {
    this.db.object(`/typePolls/${uid}/${uidName}/`).update(poll);
  }

  addByPolls(uid: string, position1: string, position2: string, poll: string) {
    this.db.object(`/typePolls/${uid}/${position1}/${position2}`).update(poll);
  }

  delete(uid: string, position: string) {
    this.db.list(`/typePolls/${uid}/${position}`).remove();
  }

  removePolls(uid: string, position: string, key: string) {
    this.db.list(`/typePolls/${uid}/${position}/${key}`).remove();
  }

  getPolls(uid: string, position: string) {
    return this.db.list(`/typePolls/${uid}/${position}/`);
  }

  getTypePolls(uid: string) {
    return this.db.list(`/typePolls/${uid}/`);
  }

  getTypePollsByIndex(uid: string, index: string) {
    return this.db.list(`/typePolls/${uid}/${index}/`);
  }

  chargeDisplay(uid: string, poll: string, position: string, display: boolean) {
    return this.db.object(`/typePolls/${uid}/${poll}/2/${position}`).update(display);
  }

  getResponseValues() {
    return this.db.object(`/responseValues/stateOfAgree`);
  }

}
