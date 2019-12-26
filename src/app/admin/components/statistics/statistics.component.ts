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

  valuePolls: any = [];

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.statisticsService.displayData(this.uidModify, this.position)
    .subscribe(x => {
      this.valuePolls = x[2];
    })
  }

}
