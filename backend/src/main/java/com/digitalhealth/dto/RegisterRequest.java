package com.digitalhealth.dto;

import com.digitalhealth.entity.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequest {

    private String fullName;

    private String email;

    private String phone;

    private String password;

    private Role role;
}