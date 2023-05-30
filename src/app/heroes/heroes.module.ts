import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  declarations: [
    ListComponent,
    HeroComponent
  ],
  providers: [

  ],
})
export class HeroesModule { }
