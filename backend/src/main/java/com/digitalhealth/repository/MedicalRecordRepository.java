package com.digitalhealth.repository;

import com.digitalhealth.entity.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {

    List<MedicalRecord> findByWorkerId(Long workerId);

    List<MedicalRecord> findByDoctorId(Long doctorId);

}