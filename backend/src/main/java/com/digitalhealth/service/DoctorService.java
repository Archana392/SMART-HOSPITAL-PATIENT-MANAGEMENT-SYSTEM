package com.digitalhealth.service;

import com.digitalhealth.dto.DoctorDTO;

import java.util.List;

public interface DoctorService {

    DoctorDTO registerDoctor(DoctorDTO doctorDTO);

    List<DoctorDTO> getAllDoctors();

    DoctorDTO getDoctorById(Long id);

    DoctorDTO updateDoctor(Long id, DoctorDTO doctorDTO);

    void deleteDoctor(Long id);
}