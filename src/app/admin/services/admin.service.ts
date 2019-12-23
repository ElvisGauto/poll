import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) { }

  displayData(uid: string, poll: string, position: string, data: boolean) {
    this.db.object(`/typePolls/${uid}/${poll}/2/${position}/2`).update(data);
  }

}
