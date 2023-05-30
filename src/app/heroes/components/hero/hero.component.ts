import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


    public name:string = 'Ironman';
    public age:number  = 45;


    // LOS GETTERS LUCEN COMO PROPIEDADES PORQUE SE USAN COMO PROPIEDADES
    get capitalizedName():string {
      return this.name.toUpperCase();
    }

    // LOS  MÉTODOS HAY QUE INVOCARLOS CON PARENTESIS Y NO LUCEN COMO UNA PROPIEDAD
    getHeroDescription():string{
      return `${ this.name} - ${ this.age}`
    }

    changeHero():void {
      this.name = 'Spiderman';
    }

    changeAge(): void {
      this.age = 25;
    }

    resetForm():void{
      this.name = 'ironman'
      this.age  = 45;
    }
}
