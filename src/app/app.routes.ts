import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { FormationListComponent } from './public/formation-list/formation-list.component';
import { FormationDetailsComponent } from './public/formation-details/formation-details.component';

export const routes: Routes = [
  
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailsComponent },
  {
    path: 'admin-space',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), 
  },
  { path: '**', redirectTo: '' },
  { path: '', component: HomeComponent,pathMatch:'full' },
];
