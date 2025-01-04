import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { Candidat } from '../../services/candidat';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  formation: any;
  candidatFirstName: string = '';
  candidatLastName: string = '';
  candidatEmail: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(FormationService) private formationService: FormationService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formationService.getFormationById(id).subscribe((formation) => {
      this.formation = formation;
    });
  }

  register(sessionIndex: number) {
    const candidat = new Candidat(0, this.candidatFirstName, this.candidatLastName, this.candidatEmail);
    this.formationService.registerCandidate(this.formation.id, sessionIndex, candidat).subscribe(response => {
      alert(response.message);
      this.resetCandidateForm();
      if (response.success) {
        this.router.navigate(['/formations']);
      }
    });
  }

  isFull(session: any) {
    return session.candidates && session.candidates.length >= 15;
  }

  downloadPDF() {
    const programUrl = this.formation.programUrl; 
    window.open(programUrl, '_blank');
  }

  resetCandidateForm() {
    this.candidatFirstName = '';
    this.candidatLastName = '';
    this.candidatEmail = '';
  }
}