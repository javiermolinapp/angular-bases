import { Component } from '@angular/core';



// COMPONENT ES UN DECORADOR QUE TRANSFORMA LA CLASE EN UN COMPONENTE

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: []
})


export class CounterComponent {

  public title = 'Contador';
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  decreaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter= 10;
  }

}
