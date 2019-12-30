import { Component, OnInit } from '@angular/core';
import { ApiSchemaService } from './api-schema.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  data: string;

  constructor(private schemaService: ApiSchemaService) {
  }

  ngOnInit() {
    this.schemaService.getSchema().subscribe(data => {
      this.data = JSON.stringify(data, null, 2);
    });
  }

}
