import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Piccoro',
            poder: 6700
        },
        {
            nombre: 'Krillin',
            poder: 3000
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    constructor() {
        console.log('Se inicializo');
    }

    agregarNuevoPersonaje( personaje: Personaje) {
        this._personajes.push( personaje );
    }
}