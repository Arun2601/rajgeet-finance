import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emi-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent implements OnInit {
  loanAmount: number = 100000;
  interestRate: number = 10.5;
  tenure: number = 12;

  emi: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;

  ngOnInit(): void {
    this.calculateEMI();
  }

  calculateEMI(): void {
    // P = Principal, R = Rate per month, N = Tenure in months
    const p = this.loanAmount;
    const r = this.interestRate / 12 / 100;
    const n = this.tenure;

    if (p > 0 && r > 0 && n > 0) {
      // E = P * r * (1+r)^n / ((1+r)^n - 1)
      this.emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
      this.totalAmount = this.emi * n;
      this.totalInterest = this.totalAmount - p;
    } else if (p > 0 && r === 0 && n > 0) {
      this.emi = Math.round(p / n);
      this.totalAmount = p;
      this.totalInterest = 0;
    } else {
      this.emi = 0;
      this.totalAmount = 0;
      this.totalInterest = 0;
    }
  }

  onAmountChange(event: any) {
    this.loanAmount = Number(event.target.value);
    this.calculateEMI();
  }

  onRateChange(event: any) {
    this.interestRate = Number(event.target.value);
    this.calculateEMI();
  }

  onTenureChange(event: any) {
    this.tenure = Number(event.target.value);
    this.calculateEMI();
  }
}
