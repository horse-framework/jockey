import { Injectable } from '@angular/core';
import { DateHelper } from 'src/lib/date-helper';
import { MessageCount } from 'src/models/message-count';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  updateChart(chart: any, data: MessageCount): void {

    data.d.forEach(item => {

      let label = DateHelper.findTimeFromUnixSeconds(item.u);

      let latest = chart.data.labels[chart.data.labels.length - 1];
      if (latest == label) {
        return;
      }

      chart.data.labels.push(label);

      chart.data.datasets.forEach(dataset => {
        switch (dataset.label) {

          //queue
          case 'Produced': dataset.data.push(item.r); break;
          case 'Ack': dataset.data.push(item.d); break;
          case 'Neg. Ack': dataset.data.push(item.rs); break;
          case 'Unack': dataset.data.push(item.nr); break;
          case 'Error': dataset.data.push(item.e); break;

          //queue store
          case 'Msgs': dataset.data.push(item.r); break;
          case 'High Prio Msgs': dataset.data.push(item.d); break;
          case 'Pending for Ack': dataset.data.push(item.nr); break;
          case 'Processing': dataset.data.push(item.s); break;

          //channel
          case 'Published': dataset.data.push(item.s); break;
          case 'Received': dataset.data.push(item.r); break;

          //router
          case 'Router Publish': dataset.data.push(item.s); break;
          case 'Router Received': dataset.data.push(item.r); break;
          case 'Router No Receiver': dataset.data.push(item.nr); break;

          //direct
          case 'Direct Sent': dataset.data.push(item.s); break;
          case 'Direct Received': dataset.data.push(item.r); break;
          case 'Direct Respond': dataset.data.push(item.rs); break;
          case 'Direct No Receiver': dataset.data.push(item.nr); break;

        }
      });

      if (chart.data.labels.length > 24) {
        chart.data.labels.shift();
        chart.data.datasets.forEach((dataset) => {
          dataset.data.shift();
        });
      }

    });

    chart.update();
  }
}
