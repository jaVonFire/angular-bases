import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 50;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spider-Man';
  }

  changeAge(): void {
   this.age = 20;
  }
}
