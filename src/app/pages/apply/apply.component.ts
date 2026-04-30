import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  currentStep: number = 1;

  // Step 1: Mobile
  mobileNumber: string = '';
  tcAcceptedStep1: boolean = true;

  // Step 2: OTP
  otp1: string = '000000';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';
  otp6: string = '';
  timerValue: number = 48;
  timerInterval: any;

  // Step 3: Basic Details
  pinCode: string = '';
  city: string = '';
  employmentType: string = ''; // 'Salaried' | 'Self-Employed'
  monthlyIncome: string = '';
  incomeReceivedIn: string = ''; // 'Account' | 'Cash' | 'Cheque'

  // Step 4: KYC
  panNumber: string = '';
  panName: string = '';
  dob: string = '';
  tcAcceptedStep4: boolean = false;

  ngOnInit() { }

  // Step 1 logic
  sendOtp() {
    if (this.mobileNumber && this.mobileNumber.length === 10 && this.tcAcceptedStep1) {
      this.currentStep = 2;
      this.startTimer();
    } else {
      alert('Please enter a valid 10-digit mobile number and accept terms.');
    }
  }

  // Step 2 logic
  startTimer() {
    this.timerValue = 48;
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  get formattedTimer(): string {
    const min = Math.floor(this.timerValue / 60);
    const sec = this.timerValue % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  verifyOtp() {
    const otpFull = this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6;
    if (otpFull.length === 6) {
      this.currentStep = 3;
      clearInterval(this.timerInterval);
    } else {
      alert('Please enter the full 6-digit OTP.');
    }
  }

  autoFocusNext(event: any, nextInputId: string) {
    if (event.target.value.length === 1) {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  // Step 3 logic
  setEmploymentType(type: string) {
    this.employmentType = type;
  }

  setIncomeReceived(type: string) {
    this.incomeReceivedIn = type;
  }

  submitBasicDetails() {
    if (this.pinCode && this.city && this.employmentType && this.monthlyIncome && this.incomeReceivedIn) {
      this.currentStep = 4;
    } else {
      alert('Please fill all details to continue.');
    }
  }

  // Step 4 logic
  submitKyc() {
    if (this.panNumber && this.panName && this.dob && this.tcAcceptedStep4) {
      alert('Application Submitted Successfully!');
      // Typically you would navigate to a success page or home here
    } else {
      alert('Please fill all KYC details and accept terms.');
    }
  }
}
