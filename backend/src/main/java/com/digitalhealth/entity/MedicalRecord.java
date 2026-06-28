package com.digitalhealth.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "medical_records")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MedicalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Worker ID
    private Long workerId;

    // Doctor ID
    private Long doctorId;

    private String visitDate;

    @Column(length = 1000)
    private String symptoms;

    @Column(length = 1000)
    private String diagnosis;

    @Column(length = 1000)
    private String medicines;

    @Column(length = 1000)
    private String allergies;

    private String bloodPressure;

    private Double weight;

    private Double height;

    @Column(length = 1000)
    private String notes;

    private String nextVisitDate;

    private String prescriptionPdf;

    private String labReport;
}