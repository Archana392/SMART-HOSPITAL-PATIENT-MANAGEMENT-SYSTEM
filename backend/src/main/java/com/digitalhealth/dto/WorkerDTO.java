package com.digitalhealth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WorkerDTO {

    private Long id;

    private String fullName;

    private String aadhaarNumber;

    private String mobileNumber;

    private String gender;

    private String dateOfBirth;

    private String bloodGroup;

    private String state;

    private String district;

    private String address;

    private String employerName;

    private String emergencyContact;

    private String healthId;

    private String qrCode;
}