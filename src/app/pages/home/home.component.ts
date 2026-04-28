import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loanAmount: number = 25000;
  tenure: number = 6;
  estimatedEmi: number = 4833;

  calculateEmi() {
    // Simple mock calculation for demonstration based on the PPT (25000, 6 months -> 4833)
    // Formula: E = P x r x (1+r)^n/((1+r)^n - 1)
    // Let's use a flat rate to match the mock roughly or just a simple mock logic
    const rate = 0.24 / 12; // 24% p.a.
    const p = this.loanAmount;
    const n = this.tenure;
    if (p > 0 && n > 0) {
      this.estimatedEmi = Math.round(p * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1));
    } else {
      this.estimatedEmi = 0;
    }
  }

  onAmountChange(event: any) {
    this.loanAmount = event.target.value;
    this.calculateEmi();
  }

  onTenureChange(event: any) {
    this.tenure = event.target.value;
    this.calculateEmi();
  }
}
