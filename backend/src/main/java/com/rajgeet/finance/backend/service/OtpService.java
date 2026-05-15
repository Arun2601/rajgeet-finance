package com.rajgeet.finance.backend.service;

import com.rajgeet.finance.backend.model.OtpDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {
    
    // In-memory store for OTPs
    private final Map<String, OtpDetails> otpStorage = new ConcurrentHashMap<>();
    private final Random random = new Random();

    @Autowired
    private SmsService smsService;
    
    public String generateAndSendOtp(String mobileNumber) {
        // Generate 6-digit OTP
        String otp = String.format("%06d", random.nextInt(999999));
        
        // Expiry time = 2 minutes from now
        LocalDateTime expiryTime = LocalDateTime.now().plusMinutes(2);
        
        // Store in map
        otpStorage.put(mobileNumber, new OtpDetails(otp, expiryTime));
        
        System.out.println("=================================================");
        System.out.println("DEBUG - GENERATED OTP FOR " + mobileNumber + " IS: " + otp);
        System.out.println("=================================================");
        
        // Send SMS via Twilio
        smsService.sendOtp(mobileNumber, otp);
        
        return otp;
    }
    
    public boolean verifyOtp(String mobileNumber, String otp) {
        OtpDetails details = otpStorage.get(mobileNumber);
        
        if (details == null) {
            return false; // No OTP requested
        }
        
        if (LocalDateTime.now().isAfter(details.getExpiryTime())) {
            otpStorage.remove(mobileNumber); // Expired, clear it
            return false;
        }
        
        if (details.getOtp().equals(otp)) {
            otpStorage.remove(mobileNumber); // Verified successfully, clear it
            return true;
        }
        
        return false;
    }
}
