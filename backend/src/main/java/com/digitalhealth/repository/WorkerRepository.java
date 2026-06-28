package com.digitalhealth.repository;

import com.digitalhealth.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {

    Optional<Worker> findByHealthId(String healthId);

    Optional<Worker> findByAadhaarNumber(String aadhaarNumber);

    boolean existsByHealthId(String healthId);

    boolean existsByAadhaarNumber(String aadhaarNumber);
}