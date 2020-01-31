import { Component, OnInit, Input } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Input() position;
  @Input() uidModify;

  totalmenteDeAcuerdo = 1;

  valuePolls$;
  valuePollsWachin: any = [];
  i = 0;

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.valuePolls$ = this.statisticsService.displayData(this.uidModify, this.position);
    this.valuePolls$.subscribe(x => {
      this.valuePollsWachin = x[2];
      this.valuePollsWachin.map( value => {
        return value[1];
      });
      // console.log(pancho);
    });
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
