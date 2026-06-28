package com.digitalhealth.service;

import com.digitalhealth.dto.DoctorDTO;
import com.digitalhealth.entity.Doctor;
import com.digitalhealth.repository.DoctorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;

    @Override
    public DoctorDTO registerDoctor(DoctorDTO dto) {

        Doctor doctor = Doctor.builder()
                .fullName(dto.getFullName())
                .email(dto.getEmail())
                .phoneNumber(dto.getPhoneNumber())
                .specialization(dto.getSpecialization())
                .qualification(dto.getQualification())
                .hospitalName(dto.getHospitalName())
                .experience(dto.getExperience())
                .licenseNumber(dto.getLicenseNumber())
                .state(dto.getState())
                .district(dto.getDistrict())
                .build();

        Doctor saved = doctorRepository.save(doctor);

        return mapToDTO(saved);
    }

    @Override
    public List<DoctorDTO> getAllDoctors() {

        return doctorRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DoctorDTO getDoctorById(Long id) {

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        return mapToDTO(doctor);
    }

    @Override
    public DoctorDTO updateDoctor(Long id, DoctorDTO dto) {

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        doctor.setFullName(dto.getFullName());
        doctor.setEmail(dto.getEmail());
        doctor.setPhoneNumber(dto.getPhoneNumber());
        doctor.setSpecialization(dto.getSpecialization());
        doctor.setQualification(dto.getQualification());
        doctor.setHospitalName(dto.getHospitalName());
        doctor.setExperience(dto.getExperience());
        doctor.setLicenseNumber(dto.getLicenseNumber());
        doctor.setState(dto.getState());
        doctor.setDistrict(dto.getDistrict());

        Doctor updated = doctorRepository.save(doctor);

        return mapToDTO(updated);
    }

    @Override
    public void deleteDoctor(Long id) {

        doctorRepository.deleteById(id);
    }

    private DoctorDTO mapToDTO(Doctor doctor) {

        return DoctorDTO.builder()
                .id(doctor.getId())
                .fullName(doctor.getFullName())
                .email(doctor.getEmail())
                .phoneNumber(doctor.getPhoneNumber())
                .specialization(doctor.getSpecialization())
                .qualification(doctor.getQualification())
                .hospitalName(doctor.getHospitalName())
                .experience(doctor.getExperience())
                .licenseNumber(doctor.getLicenseNumber())
                .state(doctor.getState())
                .district(doctor.getDistrict())
                .build();
    }
}