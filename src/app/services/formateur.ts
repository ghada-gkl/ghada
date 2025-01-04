export class Formateur {
    constructor(
      private _id: number,
      private _firstName: string,
      private _lastName: string,
      private _email: string,
      private _phoneNumber: string,
      private _specialties: string[]
    ) {}
  
    public get id(): number {
      return this._id;
    }
    public get fullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  }
  