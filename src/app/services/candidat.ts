export class Candidat {
    constructor(
      private _id: number,
      private _firstName: string,
      private _lastName: string,
      private _email: string
    ) {}
  
    public get id(): number {
      return this._id;
    }
  
    public get firstName(): string {
      return this._firstName;
    }
    public get lastName(): string {
        return this._lastName;
    }
  
    public get email(): string {
      return this._email;
    }
  }
  