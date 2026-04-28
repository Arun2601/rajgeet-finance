import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <div class="header-banner">
        <h1>How It Works</h1>
        <div class="divider"></div>
      </div>
      
      <div class="content-container">
        <div class="text-section">
          <p class="lead-text">Rajgeet Finance makes getting a loan simple, fast, and completely reliable.</p>
          
          <div class="paragraph-content">
            <p>You can start by filling out a quick online application with your basic details, without any complicated steps.</p>
            <p>Once the form is submitted, you just need to upload essential documents like Aadhaar, PAN, and income proof for a secure verification process.</p>
            <p>Our team ensures that every detail is carefully reviewed to provide accurate and fair approval.</p>
            <p>With a smooth and transparent process, your loan gets approved quickly, saving you time and effort.</p>
            <p>After approval, the loan amount is directly credited to your bank account, giving you instant financial support when you need it the most.</p>
          </div>
          
          <button class="btn-primary apply-btn" routerLink="/apply">START YOUR APPLICATION</button>
        </div>
        
        <div class="image-section">
          <!-- A CSS placeholder for an illustration -->
          <div class="illustration-placeholder">
            <div class="doc-icon">📄</div>
            <div class="check-icon">✓</div>
            <div class="bank-icon">🏦</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 60px 50px;
      background-color: var(--bg-white);
      min-height: 80vh;
    }
    
    .header-banner {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .header-banner h1 {
      font-size: 36px;
      color: var(--primary-blue);
      margin-bottom: 15px;
    }
    
    .divider {
      height: 4px;
      width: 60px;
      background-color: var(--primary-green);
      margin: 0 auto;
      border-radius: 2px;
    }
    
    .content-container {
      display: flex;
      max-width: 1100px;
      margin: 0 auto;
      gap: 50px;
      align-items: center;
    }
    
    .text-section {
      flex: 1;
    }
    
    .lead-text {
      font-size: 22px;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 30px;
      line-height: 1.4;
    }
    
    .paragraph-content p {
      font-size: 16px;
      color: var(--text-light);
      margin-bottom: 20px;
      line-height: 1.6;
      position: relative;
      padding-left: 20px;
    }
    
    .paragraph-content p::before {
      content: '•';
      color: var(--primary-green);
      font-weight: bold;
      font-size: 20px;
      position: absolute;
      left: 0;
      top: -2px;
    }
    
    .apply-btn {
      margin-top: 20px;
      padding: 15px 30px;
      font-size: 16px;
    }
    
    .image-section {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    
    .illustration-placeholder {
      width: 100%;
      max-width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #f0f7f4 0%, #e0f0e9 100%);
      border-radius: 20px;
      position: relative;
      box-shadow: 0 10px 30px rgba(0, 166, 81, 0.1);
    }
    
    .doc-icon, .check-icon, .bank-icon {
      position: absolute;
      background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      font-size: 40px;
    }
    
    .doc-icon {
      width: 100px;
      height: 100px;
      top: 50px;
      left: 40px;
    }
    
    .check-icon {
      width: 120px;
      height: 120px;
      top: 140px;
      right: 30px;
      color: var(--primary-green);
      font-size: 60px;
      z-index: 2;
    }
    
    .bank-icon {
      width: 90px;
      height: 90px;
      bottom: 60px;
      left: 80px;
    }
    
    @media (max-width: 900px) {
      .content-container {
        flex-direction: column;
      }
      .image-section {
        width: 100%;
        margin-top: 40px;
      }
    }
  `]
})
export class HowItWorksComponent {}
