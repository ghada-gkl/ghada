import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../services/formation';
import { Formateur } from '../../services/formateur';
import { Session } from '../../services/session';
import { Candidat } from '../../services/candidat';

@Component({
  selector: 'app-formation-management',
  templateUrl: './formation-management.component.html',
  styleUrls: ['./formation-management.component.css']
})
export class FormationManagementComponent implements OnInit {
  formations: Formation[] = [
    new Formation(
      1,
      "Développement Web",
      "Apprenez les bases du développement web, incluant HTML, CSS et JavaScript.",
      "web-programme.pdf", // Ensure this is a string
      30,
      [
        new Session(1, new Date("2023-01-15"), new Date("2023-01-30"), "Session 1", [
          new Formateur(1, "John", "Doe", "john.doe@example.com", "123-456-7890", ["JavaScript", "Angular"])
        ], [
          new Candidat(1, "Alice", "Smith", "alice.smith@example.com"),
          new Candidat(2, "Bob", "Johnson", "bob.johnson@example.com")
        ]),
        new Session(2, new Date("2023-02-15"), new Date("2023-02-28"), "Session 2", [
          new Formateur(1, "John", "Doe", "john.doe@example.com", "123-456-7890", ["JavaScript", "Angular"])
        ], [])
      ]
    ),
    new Formation(
      2,
      "Gestion de Projets Agile",
      "Découvrez les principes et pratiques de la gestion de projets en méthode Agile.",
      "agile-programme.pdf", // Ensure this is a string
      20,
      [
        new Session(3, new Date("2023-03-01"), new Date("2023-03-15"), "Session 1", [
          new Formateur(2, "Jane", "Doe", "jane.doe@example.com", "987-654-3210", ["Agile", "Scrum"])
        ], [
          new Candidat(3, "Charlie", "Brown", "charlie.brown@example.com")
        ])
      ]
    )
  ];

  action = "";
  selectedFormationId!: number;
  SearchValue = "";
  newFormation: Formation = new Formation(0, '', '', '', 0, []); // Ensure this line is correct

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.loadFormations();
  }

  loadFormations() {
    this.formationService.getFormations().subscribe((formations) => {
      this.formations = formations;
    });
  }

  addFormation(formation: Formation) {
    this.formationService.addFormation(formation.name, formation.description, formation.chargeHoraire, formation.programUrl).subscribe(() => {
      this.loadFormations();
    });
  }

  editFormation(formation: Formation) {
    this.formationService.updateFormation(formation).subscribe(() => {
      this.loadFormations();
    });
  }

  deleteFormation(id: number) {
    this.formationService.deleteFormation(id).subscribe(() => {
      this.loadFormations();
    });
  }

  registerCandidate(formationId: number, sessionIndex: number, candidat: Candidat) {
    this.formationService.registerCandidate(formationId, sessionIndex, candidat).subscribe((response) => {
      console.log(response.message);
      this.loadFormations();
    });
  }

  filteredFormations() {
    return this.formations.filter(formation =>
      formation.name.toLowerCase().startsWith(this.SearchValue.toLowerCase())
    );
  }
}