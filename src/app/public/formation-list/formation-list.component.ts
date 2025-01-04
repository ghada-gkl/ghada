import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../services/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  searchQuery: string = '';
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.loadFormations();
  }

  loadFormations() {
    this.formationService.getFormations().subscribe((formations) => {
      this.formations = formations;
      this.filteredFormations = formations;
    });
  }

  filterFormations() {
    this.filteredFormations = this.formations.filter(formation =>
      formation.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}