import { Component, OnInit } from '@angular/core';
import { WorkstepData } from './interfaces';
import { DetailsComponent } from './details/details.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { WorkstepClientService } from './workstep-client.service';
import { ancestorWhere } from 'tslint';

@Component({
  selector: 'app-workstep-view',
  templateUrl: './workstep-view.component.html',
  styleUrls: ['./workstep-view.component.css']
})
export class WorkstepViewComponent implements OnInit {

  displayedColumns = ['id', 'title', 'description', 'actions'];
  workstepList: WorkstepData[];
  errorMsg: string = null;
  streamData = '';

  constructor(public dialog: MatDialog,
              private service: WorkstepClientService) {
  }

  ngOnInit() {

    this.service.getWorksteps().then((data) => {
      this.workstepList = data;
    });
  }

  rowClick(row: any) {

    const dialogConfig = {
      width: '500px',
      data: {id: row.id, title: row.title}
    } as MatDialogConfig;

    const dialogRef = this.dialog.open(DetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + JSON.stringify(result));

      this.service.updateWorkstep(result).then((data) => {
        console.log('UPD>>' + JSON.stringify(data));
        this.ngOnInit();
      });
    });
  }

  addNew() {
    this.service.addWorkstep()
      .then(result => {
        this.ngOnInit();
      })
      .catch((error) => {
       // this.errorMsg = error.target;
        console.log('>>>' + error);
      });
  }

  deleteClick(row: any): void {
    const id = row.id;
    console.log('DEL>>' + id);
    this.service.deleteWorkstep(id)
      .then(() => this.ngOnInit());
  }
}
