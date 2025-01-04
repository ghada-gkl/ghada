import { Session } from "./session";

export class Formation {
    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }
    public get description(): string {
        return this._description;
    }
    public set description(description: string) {
        this._description = description;
    }
    public get programUrl(): string {
        return this._programUrl;
    }
    public set programUrl(programUrl: string) {
        this._programUrl = programUrl;
    }
    public get chargeHoraire(): number {
        return this._chargeHoraire;
    }
    public set chargeHoraire(chargeHoraire: number) {
        this._chargeHoraire = chargeHoraire;
    }
    public get session(): Session[] {
        return this._session;
    }
    public set session(session: Session[]) {
        this._session = session; // Fix this line
    }

    constructor(
        private _id: number,
        private _programUrl: string,
        private _description: string,
        private _chargeHoraire: number,
        private _session: Session[],
        private _name: string
    ) {}
}