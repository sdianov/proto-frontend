import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { WorkstepViewComponent } from './workstep-view/workstep-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DetailsComponent } from './workstep-view/details/details.component';
import { MatFormFieldModule, MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    WorkstepViewComponent,
    DashboardViewComponent,
    AdminViewComponent,
    DetailsComponent
  ],
  entryComponents: [
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
