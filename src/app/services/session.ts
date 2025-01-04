import { Formateur } from './formateur';
import { Candidat } from './candidat';

export class Session {
  constructor(
    public id: number,
    private _startDate: Date,
    private _endDate: Date,
    private _description: string,
    private _formateurs: Formateur[], 
    private _candidates: Candidat[] = [] 
  ) {
    // 1 ou 2 formateurs:
    if (_formateurs.length < 1 || _formateurs.length > 2) {
      throw new Error('une session a seulement 1 ou 2 formateurs');
    }
  }

  public get startDate(): Date {
    return this._startDate;
  }
  public set startDate(value: Date) {
    this._startDate = value;
  }

  public get endDate(): Date {
    return this._endDate;
  }
  public set endDate(value: Date) {
    this._endDate = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get formateurs(): Formateur[] {
    return this._formateurs;
  }
  public set formateurs(value: Formateur[]) {
    if (value.length < 1 || value.length > 2) {
      throw new Error('A session must have one or two formateurs.');
    }
    this._formateurs = value;
  }

  public get candidates(): Candidat[] {
    return this._candidates;
  }
  public set candidates(value: Candidat[]) {
    this._candidates = value;
  }

  public addCandidate(candidate: Candidat): { success: boolean; message: string } {
    if (this._candidates.length >= 15) {
      return { success: false, message: 'La session est complète.' };
    }

    this._candidates.push(candidate);
    return { success: true, message: 'Candidat ajouté avec succès.' };
  }
}
