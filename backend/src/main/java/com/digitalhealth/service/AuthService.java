package com.digitalhealth.service;

import com.digitalhealth.dto.LoginRequest;
import com.digitalhealth.dto.LoginResponse;
import com.digitalhealth.dto.RegisterRequest;

public interface AuthService {

    String register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}