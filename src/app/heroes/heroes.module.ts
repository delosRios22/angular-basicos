import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  // Que cosas contienen este módulo, que componentes, pipes
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  // que cosas quiero que sean visibles fuera de este módulo
  exports: [
    ListadoComponent
  ],
  /**
   * Solo van módulos en los imports
   * CommonModule: Ofrece directivas
   * */ 
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
