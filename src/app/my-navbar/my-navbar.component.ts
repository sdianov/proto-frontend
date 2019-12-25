import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent implements OnInit {

  isExpanded: boolean;
  selectedComponent = 'workstep';

  constructor() {
  }

  ngOnInit() {
  }

  changeView(name: string) {
    this.selectedComponent = name;
  }
}
