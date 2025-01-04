import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormationDetailsComponent } from './public/formation-details/formation-details.component';
import { AdminSpaceComponent } from './admin/admin-space/admin-space.component';
import { CandidatManagementComponent } from './admin/candidat-management/candidat-management.component';
import { FormateurManagementComponent } from './admin/formateur-management/formateur-management.component';
import { FormationManagementComponent } from './admin/formation-management/formation-management.component';
import { SessionManagementComponent } from './admin/session-management/session-management.component';
import { FormationListComponent } from './public/formation-list/formation-list.component';

import { routes } from './app.routes'; 

@NgModule({
  declarations: [
    
    FormationListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    FormsModule
  ],
  providers: [],

})
export class AppModule {}