import { Component } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.css']
})
export class SplitComponent {


  dividend: number = 0;
  divisor: number = 0;
  results: number | null = null;
  errorMessage: string | null = null;


  divideNumbers() {
    if (this.divisor === 0) {
      this.errorMessage = "No se puede dividir por cero.";
      this.results = null;
    } else if (this.dividend < 0 || this.divisor < 0) {
      this.results = -Math.abs(this.dividend) / Math.abs(this.divisor);
      this.errorMessage = null;
    } else {
      this.results = this.dividend / this.divisor;
      this.errorMessage = null;
    }
  }
}
