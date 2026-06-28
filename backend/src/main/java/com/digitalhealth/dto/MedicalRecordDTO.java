package com.digitalhealth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MedicalRecordDTO {

    private Long id;

    private Long workerId;

    private Long doctorId;

    private String visitDate;

    private String symptoms;

    private String diagnosis;

    private String medicines;

    private String allergies;

    private String bloodPressure;

    private Double weight;

    private Double height;

    private String notes;

    private String nextVisitDate;

    private String prescriptionPdf;

    private String labReport;
}