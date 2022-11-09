import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Diego';
    edad: number = 27;

    get nombreCapitalizado() {
        return this.nombre.toLocaleUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombe(): void {
        this.nombre = 'Andrés';
    }

    cambiarEdad() {
        this.edad = 32
    }

}