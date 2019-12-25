import { Component, ViewChild } from '@angular/core';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-tests';

  @ViewChild(MyNavbarComponent, {static: false}) navbarComponent: MyNavbarComponent;

  hamClick() {
    this.navbarComponent.isExpanded = !this.navbarComponent.isExpanded;
  }
}
