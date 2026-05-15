package com.rajgeet.finance.backend.controller;

import com.rajgeet.finance.backend.dto.ApiResponseDto;
import com.rajgeet.finance.backend.dto.OtpRequestDto;
import com.rajgeet.finance.backend.dto.OtpVerifyDto;
import com.rajgeet.finance.backend.service.OtpService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // Allow Angular frontend
public class AuthController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/send-otp")
    public ResponseEntity<ApiResponseDto<String>> sendOtp(@Valid @RequestBody OtpRequestDto request) {
        try {
            otpService.generateAndSendOtp(request.getMobileNumber());
            return ResponseEntity.ok(ApiResponseDto.success("OTP sent successfully to " + request.getMobileNumber(), null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(ApiResponseDto.error("Failed to send OTP"));
        }
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponseDto<String>> verifyOtp(@Valid @RequestBody OtpVerifyDto request) {
        boolean isValid = otpService.verifyOtp(request.getMobileNumber(), request.getOtp());
        
        if (isValid) {
            // Here you would typically generate a JWT token and return it
            return ResponseEntity.ok(ApiResponseDto.success("OTP verified successfully. Login successful.", "dummy-jwt-token"));
        } else {
            return ResponseEntity.badRequest().body(ApiResponseDto.error("Invalid or expired OTP"));
        }
    }
}
