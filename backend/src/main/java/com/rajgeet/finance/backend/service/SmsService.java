package com.rajgeet.finance.backend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.phone.number}")
    private String twilioNumber;

    @PostConstruct
    public void initTwilio() {
        Twilio.init(accountSid, authToken);
    }

    public void sendOtp(String toMobileNumber, String otp) {
        // Format to standard E.164 format (adding +91 if purely digits)
        String formattedNumber = toMobileNumber;
        if (!formattedNumber.startsWith("+")) {
            formattedNumber = "+91" + formattedNumber;
        }

        try {
            Message message = Message.creator(
                    new PhoneNumber(formattedNumber),
                    new PhoneNumber(twilioNumber),
                    "Your Rajgeet Finance OTP is: " + otp + ". It is valid for 2 minutes."
            ).create();
            System.out.println("Twilio SMS sent! Message SID: " + message.getSid());
        } catch (Exception e) {
            System.err.println("Failed to send SMS via Twilio: " + e.getMessage());
        }
    }
}
