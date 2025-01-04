import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailsComponent }, 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports
  :[RouterModule]})
export class PublicModule { }
