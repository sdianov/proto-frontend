import { Component, OnInit } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  dataRows: any[];

  constructor(private service: ApiDataService) {
  }

  ngOnInit() {

    this.service.getGenericItems('group').subscribe(data => {
      this.dataRows = data as any[];
    });
  }

}
