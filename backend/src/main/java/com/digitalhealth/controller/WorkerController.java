package com.digitalhealth.controller;

import com.digitalhealth.dto.WorkerDTO;
import com.digitalhealth.service.WorkerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class WorkerController {

    private final WorkerService workerService;

    @PostMapping
    public ResponseEntity<WorkerDTO> registerWorker(@RequestBody WorkerDTO workerDTO) {
        return ResponseEntity.ok(workerService.registerWorker(workerDTO));
    }

    @GetMapping
    public ResponseEntity<List<WorkerDTO>> getAllWorkers() {
        return ResponseEntity.ok(workerService.getAllWorkers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerDTO> getWorkerById(@PathVariable Long id) {
        return ResponseEntity.ok(workerService.getWorkerById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkerDTO> updateWorker(
            @PathVariable Long id,
            @RequestBody WorkerDTO workerDTO) {

        return ResponseEntity.ok(workerService.updateWorker(id, workerDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWorker(@PathVariable Long id) {

        workerService.deleteWorker(id);

        return ResponseEntity.ok("Worker deleted successfully");
    }
}