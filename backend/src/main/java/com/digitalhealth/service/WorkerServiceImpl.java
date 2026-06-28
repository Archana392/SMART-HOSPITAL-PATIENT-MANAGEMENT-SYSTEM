package com.digitalhealth.service;

import com.digitalhealth.dto.WorkerDTO;
import com.digitalhealth.entity.Worker;
import com.digitalhealth.repository.WorkerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WorkerServiceImpl implements WorkerService {

    private final WorkerRepository workerRepository;

    @Override
    public WorkerDTO registerWorker(WorkerDTO dto) {

        Worker worker = Worker.builder()
                .fullName(dto.getFullName())
                .aadhaarNumber(dto.getAadhaarNumber())
                .mobileNumber(dto.getMobileNumber())
                .gender(dto.getGender())
                .dateOfBirth(dto.getDateOfBirth())
                .bloodGroup(dto.getBloodGroup())
                .state(dto.getState())
                .district(dto.getDistrict())
                .address(dto.getAddress())
                .employerName(dto.getEmployerName())
                .emergencyContact(dto.getEmergencyContact())
                .healthId("DH-" + UUID.randomUUID().toString().substring(0, 8))
                .qrCode("QR-" + UUID.randomUUID().toString().substring(0, 8))
                .build();

        Worker saved = workerRepository.save(worker);

        return mapToDTO(saved);
    }

    @Override
    public List<WorkerDTO> getAllWorkers() {

        return workerRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public WorkerDTO getWorkerById(Long id) {

        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Worker not found"));

        return mapToDTO(worker);
    }

    @Override
    public WorkerDTO updateWorker(Long id, WorkerDTO dto) {

        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Worker not found"));

        worker.setFullName(dto.getFullName());
        worker.setAadhaarNumber(dto.getAadhaarNumber());
        worker.setMobileNumber(dto.getMobileNumber());
        worker.setGender(dto.getGender());
        worker.setDateOfBirth(dto.getDateOfBirth());
        worker.setBloodGroup(dto.getBloodGroup());
        worker.setState(dto.getState());
        worker.setDistrict(dto.getDistrict());
        worker.setAddress(dto.getAddress());
        worker.setEmployerName(dto.getEmployerName());
        worker.setEmergencyContact(dto.getEmergencyContact());

        Worker updated = workerRepository.save(worker);

        return mapToDTO(updated);
    }

    @Override
    public void deleteWorker(Long id) {

        workerRepository.deleteById(id);
    }

    private WorkerDTO mapToDTO(Worker worker) {

        return WorkerDTO.builder()
                .id(worker.getId())
                .fullName(worker.getFullName())
                .aadhaarNumber(worker.getAadhaarNumber())
                .mobileNumber(worker.getMobileNumber())
                .gender(worker.getGender())
                .dateOfBirth(worker.getDateOfBirth())
                .bloodGroup(worker.getBloodGroup())
                .state(worker.getState())
                .district(worker.getDistrict())
                .address(worker.getAddress())
                .employerName(worker.getEmployerName())
                .emergencyContact(worker.getEmergencyContact())
                .healthId(worker.getHealthId())
                .qrCode(worker.getQrCode())
                .build();
    }
}