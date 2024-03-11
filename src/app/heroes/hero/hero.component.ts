import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  public cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  public cambiarEdad(): void {
    this.age = 50;
  }

  get capitalizarNombre(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
