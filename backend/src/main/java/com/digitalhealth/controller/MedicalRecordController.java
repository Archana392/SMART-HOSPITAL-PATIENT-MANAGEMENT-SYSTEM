package com.digitalhealth.controller;

import com.digitalhealth.dto.MedicalRecordDTO;
import com.digitalhealth.service.MedicalRecordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-records")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class MedicalRecordController {

    private final MedicalRecordService medicalRecordService;

    @PostMapping
    public ResponseEntity<MedicalRecordDTO> createMedicalRecord(
            @RequestBody MedicalRecordDTO medicalRecordDTO) {

        return ResponseEntity.ok(
                medicalRecordService.createMedicalRecord(medicalRecordDTO));
    }

    @GetMapping
    public ResponseEntity<List<MedicalRecordDTO>> getAllMedicalRecords() {

        return ResponseEntity.ok(
                medicalRecordService.getAllMedicalRecords());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalRecordDTO> getMedicalRecordById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                medicalRecordService.getMedicalRecordById(id));
    }

    @GetMapping("/worker/{workerId}")
    public ResponseEntity<List<MedicalRecordDTO>> getMedicalRecordsByWorkerId(
            @PathVariable Long workerId) {

        return ResponseEntity.ok(
                medicalRecordService.getMedicalRecordsByWorkerId(workerId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalRecordDTO> updateMedicalRecord(
            @PathVariable Long id,
            @RequestBody MedicalRecordDTO medicalRecordDTO) {

        return ResponseEntity.ok(
                medicalRecordService.updateMedicalRecord(id, medicalRecordDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedicalRecord(
            @PathVariable Long id) {

        medicalRecordService.deleteMedicalRecord(id);

        return ResponseEntity.ok("Medical Record deleted successfully");
    }
}