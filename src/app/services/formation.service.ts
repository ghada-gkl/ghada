import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Formation } from './formation';
import { Session } from './session';
import { Candidat } from './candidat';
import { Formateur } from './formateur';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private baseURL = 'http://localhost:3000/formations';
  private apiUrl = 'http://localhost:3000/formateurs';
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  formationsEdited = new Subject<Formation[]>();

  constructor(private httpClient: HttpClient) {}

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.baseURL);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(`${this.baseURL}/${formation.id}`, formation, this.options);
  }

  addFormation(
    name: string,
    description: string,
    chargeHoraire: number,
    programUrl: string
  ): Observable<Formation> {
    const formation = { name, description, chargeHoraire, programUrl, sessions: [] as Session[] };
    return this.httpClient.post<Formation>(this.baseURL, formation, this.options);
  }

  deleteFormation(id: number): Observable<Formation> {
    return this.httpClient.delete<Formation>(`${this.baseURL}/${id}`);
  }

  getFormateurs(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.apiUrl);
  }

  addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.httpClient.post<Formateur>(this.apiUrl, formateur);
  }

  updateFormateur(formateur: Formateur): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${formateur.id}`, formateur);
  }

  deleteFormateur(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  registerCandidate(
    formationId: number,
    sessionIndex: number,
    candidat: Candidat
  ): Observable<{ success: boolean; message: string }> {
    return new Observable((observer) => {
      this.getFormationById(formationId).subscribe((formation) => {
        if (!formation) {
          observer.next({ success: false, message: 'Formation introuvable.' });
          observer.complete();
          return;
        }

        const session = formation.session[sessionIndex];
        if (!session) {
          observer.next({
            success: false,
            message: 'Session introuvable pour cette formation.',
          });
          observer.complete();
          return;
        }

        if (session.candidates.length >= 15) {
          observer.next({
            success: false,
            message: 'La session est complète.',
          });
          observer.complete();
          return;
        }

        session.candidates.push(candidat);
        observer.next({
          success: true,
          message: 'Inscription réussie !',
        });
        observer.complete();
      });
    });
  }
}
