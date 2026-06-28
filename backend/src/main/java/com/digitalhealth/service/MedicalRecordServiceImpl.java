package com.digitalhealth.service;

import com.digitalhealth.dto.MedicalRecordDTO;
import com.digitalhealth.entity.MedicalRecord;
import com.digitalhealth.repository.MedicalRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MedicalRecordServiceImpl implements MedicalRecordService {

    private final MedicalRecordRepository medicalRecordRepository;

    @Override
    public MedicalRecordDTO createMedicalRecord(MedicalRecordDTO dto) {

        MedicalRecord record = MedicalRecord.builder()
                .workerId(dto.getWorkerId())
                .doctorId(dto.getDoctorId())
                .visitDate(dto.getVisitDate())
                .symptoms(dto.getSymptoms())
                .diagnosis(dto.getDiagnosis())
                .medicines(dto.getMedicines())
                .allergies(dto.getAllergies())
                .bloodPressure(dto.getBloodPressure())
                .weight(dto.getWeight())
                .height(dto.getHeight())
                .notes(dto.getNotes())
                .nextVisitDate(dto.getNextVisitDate())
                .prescriptionPdf(dto.getPrescriptionPdf())
                .labReport(dto.getLabReport())
                .build();

        MedicalRecord saved = medicalRecordRepository.save(record);

        return mapToDTO(saved);
    }

    @Override
    public List<MedicalRecordDTO> getAllMedicalRecords() {

        return medicalRecordRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public MedicalRecordDTO getMedicalRecordById(Long id) {

        MedicalRecord record = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medical Record not found"));

        return mapToDTO(record);
    }

    @Override
    public List<MedicalRecordDTO> getMedicalRecordsByWorkerId(Long workerId) {

        return medicalRecordRepository.findByWorkerId(workerId)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public MedicalRecordDTO updateMedicalRecord(Long id, MedicalRecordDTO dto) {

        MedicalRecord record = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medical Record not found"));

        record.setWorkerId(dto.getWorkerId());
        record.setDoctorId(dto.getDoctorId());
        record.setVisitDate(dto.getVisitDate());
        record.setSymptoms(dto.getSymptoms());
        record.setDiagnosis(dto.getDiagnosis());
        record.setMedicines(dto.getMedicines());
        record.setAllergies(dto.getAllergies());
        record.setBloodPressure(dto.getBloodPressure());
        record.setWeight(dto.getWeight());
        record.setHeight(dto.getHeight());
        record.setNotes(dto.getNotes());
        record.setNextVisitDate(dto.getNextVisitDate());
        record.setPrescriptionPdf(dto.getPrescriptionPdf());
        record.setLabReport(dto.getLabReport());

        MedicalRecord updated = medicalRecordRepository.save(record);

        return mapToDTO(updated);
    }

    @Override
    public void deleteMedicalRecord(Long id) {

        medicalRecordRepository.deleteById(id);
    }

    private MedicalRecordDTO mapToDTO(MedicalRecord record) {

        return MedicalRecordDTO.builder()
                .id(record.getId())
                .workerId(record.getWorkerId())
                .doctorId(record.getDoctorId())
                .visitDate(record.getVisitDate())
                .symptoms(record.getSymptoms())
                .diagnosis(record.getDiagnosis())
                .medicines(record.getMedicines())
                .allergies(record.getAllergies())
                .bloodPressure(record.getBloodPressure())
                .weight(record.getWeight())
                .height(record.getHeight())
                .notes(record.getNotes())
                .nextVisitDate(record.getNextVisitDate())
                .prescriptionPdf(record.getPrescriptionPdf())
                .labReport(record.getLabReport())
                .build();
    }
}