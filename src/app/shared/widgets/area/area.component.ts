import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  
  Highcharts = Highcharts;
  chartOptions:any;
  
  @Input() data: any = [];

  

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      series: [{
        data:[71, 78, 39, 66]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}