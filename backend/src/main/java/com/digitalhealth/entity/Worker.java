package com.digitalhealth.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "workers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(unique = true, nullable = false)
    private String aadhaarNumber;

    @Column(nullable = false)
    private String mobileNumber;

    private String gender;

    private String dateOfBirth;

    private String bloodGroup;

    private String state;

    private String district;

    @Column(length = 500)
    private String address;

    private String employerName;

    private String emergencyContact;

    @Column(unique = true)
    private String healthId;

    private String qrCode;
}