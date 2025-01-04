import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { CandidatManagementComponent } from './candidat-management/candidat-management.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { FormateurManagementComponent } from './formateur-management/formateur-management.component';
import { FormationManagementComponent } from './formation-management/formation-management.component';

@NgModule({
  declarations: [
    CandidatManagementComponent,
    AdminSpaceComponent,
    FormateurManagementComponent,
    FormationManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
  ],
})
export class AdminModule {}
