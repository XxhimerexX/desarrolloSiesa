import { Component } from '@angular/core';

@Component({
  selector: 'app-convert-to-base',
  templateUrl: './convert-to-base.component.html',
  styleUrls: ['./convert-to-base.component.css']
})
export class ConvertToBaseComponent {
  number: number = 0;
  base: number = 2;
  result: string = '';
  steps: { quotient: number, remainder: number }[] = [];

  converDeBase() { 
    let num = this.number;
    let base = this.base;
    let result = '';
    let steps = [];

    

    while (num > 0) {
      
      let remainder = num % base;
      let quotient = Math.floor(num / base);
      steps.push({ quotient, remainder });
      result = remainder.toString() + result;
      num = quotient;
    }

    this.result = result;
    this.steps = steps.reverse();
    console.log(this.steps);
  }

}
