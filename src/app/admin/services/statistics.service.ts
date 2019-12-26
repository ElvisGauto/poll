import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  displayData(uidModify: string, poll: string) {
    return this.db.list(`/typePolls/${uidModify}/${poll}`);
  }
}
