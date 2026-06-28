# Database Requirement Analysis

## Purpose

The Digital Health Record Management System for Migrant Workers requires a database to securely store and manage healthcare information, worker details, doctor information, appointments, and medical records.

---

## Database Requirements

### Worker Information

The system should store:

- Worker ID
- First Name
- Last Name
- Email
- Contact Number
- Aadhaar Number
- Date of Birth
- Gender
- Home State
- Current State
- Occupation
- Blood Type
- Emergency Contact

---

### Doctor Information

The system should store:

- Doctor ID
- Doctor Name
- Specialization
- Contact Number
- Email

---

### Appointment Information

The system should store:

- Appointment ID
- Patient ID
- Doctor ID
- Appointment Date
- Appointment Time
- Appointment Status

---

### Medical Record Information

The system should store:

- Record ID
- Patient ID
- Diagnosis
- Prescription
- Doctor Notes
- Visit Date

---

## Database Tables Identified

1. PATIENTS
2. DOCTORS
3. APPOINTMENTS
4. DOCTOR_NOTES
5. ADMIN_DASHBOARD

---

## Relationships

- One Patient can have multiple Appointments.
- One Doctor can handle multiple Appointments.
- One Patient can have multiple Medical Records.
- One Doctor can create multiple Medical Records.

---

## Expected Outcome

A structured relational database capable of securely managing healthcare records and appointment data for migrant workers.
