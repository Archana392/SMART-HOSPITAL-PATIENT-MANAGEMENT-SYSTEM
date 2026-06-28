package com.digitalhealth.service;

import com.digitalhealth.dto.WorkerDTO;

import java.util.List;

public interface WorkerService {

    WorkerDTO registerWorker(WorkerDTO workerDTO);

    List<WorkerDTO> getAllWorkers();

    WorkerDTO getWorkerById(Long id);

    WorkerDTO updateWorker(Long id, WorkerDTO workerDTO);

    void deleteWorker(Long id);
}