package com.digitalhealth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorDTO {

    private Long id;

    private String fullName;

    private String email;

    private String phoneNumber;

    private String specialization;

    private String qualification;

    private String hospitalName;

    private Integer experience;

    private String licenseNumber;

    private String state;

    private String district;
}