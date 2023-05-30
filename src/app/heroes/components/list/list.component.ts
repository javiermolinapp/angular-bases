import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


    public heroNames: string[]= ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

    public deletedHero?:string;

    //LO DE ANTES SERÍA EQUIVALENTE A PONER LO SIGUIENTE, AUNQUE NOS PODRÍA DAR ERROR EN ALGUNOS CASOS
    // public deletedHero:string = '';



    removeLastHero(): void {
      this.deletedHero = this.heroNames.pop();
    }
}
