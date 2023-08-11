import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3> Counter: {{counter}}</h3>
  <button (click)="changeValue(+1)" >+1</button>
  <button (click)="resetCounter(10)" >Reset</button>
  <!-- <button (click)="resetCounter()" >Reset</button> -> Código del profe -->
  <button (click)="changeValue(-1)" >-1</button>`,
})

export class CounterComponent {
  public counter: number = 10;

  changeValue(value:number): void {
    this.counter += value;
  }

  resetCounter(value: number) {
    this.counter = value
  }

  // resetCounter() {
  //   this.counter = 10;    --> Código del profe
  // }
}
