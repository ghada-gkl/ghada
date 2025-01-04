import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormationService } from '../../services/formation.service';
import { Formateur } from '../../services/formateur'; 

@Component({
  selector: 'app-formateur-management',
  templateUrl: './formateur-management.component.html',
  styleUrls: ['./formateur-management.component.css']
})
export class FormateurManagementComponent implements OnInit {
  formateurs: Formateur[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.loadFormateurs();
  }

  loadFormateurs() {
    this.formationService.getFormateurs().subscribe((formateurs) => {
      this.formateurs = formateurs;
    });
  }

  addFormateur(formateur: Formateur) {
    this.formationService.addFormateur(formateur).subscribe(() => {
      this.loadFormateurs();
    });
  }

  editFormateur(formateur: Formateur) {
    this.formationService.updateFormateur(formateur).subscribe(() => {
      this.loadFormateurs();
    });
  }

  deleteFormateur(id: number) {
    this.formationService.deleteFormateur(id).subscribe(() => {
      this.loadFormateurs();
    });
  }
}