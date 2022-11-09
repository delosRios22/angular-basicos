import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    <h2>{{title}}</h2>
    <h3>La base es <strong>{{base}}</strong></h3>

    <button (click)="acumular(base)"> + {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)"> - {{base}}</button>

    `
})

export class ContadorComponent {
    title = 'Contador app';
  numero = 5;
  base = 5;

  acumular(valor: number) {
    this.numero += valor;
  }


}