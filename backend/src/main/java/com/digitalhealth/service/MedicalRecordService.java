package com.digitalhealth.service;

import com.digitalhealth.dto.MedicalRecordDTO;

import java.util.List;

public interface MedicalRecordService {

    MedicalRecordDTO createMedicalRecord(MedicalRecordDTO medicalRecordDTO);

    List<MedicalRecordDTO> getAllMedicalRecords();

    MedicalRecordDTO getMedicalRecordById(Long id);

    List<MedicalRecordDTO> getMedicalRecordsByWorkerId(Long workerId);

    MedicalRecordDTO updateMedicalRecord(Long id, MedicalRecordDTO medicalRecordDTO);

    void deleteMedicalRecord(Long id);
}