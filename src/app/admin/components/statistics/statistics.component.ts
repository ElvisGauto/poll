import { Component, OnInit, Input } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input('position') position;
  @Input('uidModify') uidModify;

  totalmenteDeAcuerdo: number = 1;

  valuePolls$;
  valuePollsWachin: any = [];
  i: number = 0;
  

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.valuePolls$ = this.statisticsService.displayData(this.uidModify, this.position);
    this.valuePolls$.subscribe(x => {
      this.valuePollsWachin = x[2];
      let pancho = this.valuePollsWachin.map(function(x) {
        return x[1]
      })
      // console.log(pancho);
    })
  }

  // getStatistics(poll) {
    // for(let i = 1; i <= this.valuePollsWachin.length; i++) {
    //   if(poll === 'De acuerdo') {
    //     this.i = this.i + 1;
    //     return this.i
    //   }
    // }
    // if(poll === 'De acuerdo') {
    //   this.i = this.i + 1;
    //   return this.i
    // }
    // console.log(poll.pop());
    // console.log(poll);
  // }

}
