package com.kotlin_spring_bff.kotlin_spring_bff.controllers.auth

import com.kotlin_spring_bff.kotlin_spring_bff.models.JwtPayload
import com.kotlin_spring_bff.kotlin_spring_bff.models.LoginRequest
import com.kotlin_spring_bff.kotlin_spring_bff.models.LoginResponse
import com.kotlin_spring_bff.kotlin_spring_bff.services.ldap.LdapDirectoryService
import com.kotlin_spring_bff.kotlin_spring_bff.utils.JwtUtil
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.Instant

@RestController
class AuthController(
    private val ldapDirectoryService: LdapDirectoryService
) {
    companion object {
        const val BASE_PATH = "/api/v1/auth"
    }

    @PostMapping("$BASE_PATH/login")
    fun login(@RequestBody loginRequest: LoginRequest): ResponseEntity<LoginResponse> {
        //1. Find the user by email
        val entry = ldapDirectoryService.bindByEmail(loginRequest.email)
            ?: return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED).body(
                    LoginResponse(
                        message = "User with this email (${loginRequest.email}) not found"
                    )
                )

        //2. Check user credentials
        val bindResult = ldapDirectoryService.bind(entry.dn, loginRequest.password)
        if (!bindResult.success) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                LoginResponse(
                    message = "Invalid credentials"
                )
            )
        }

        //3. Form the payload and generate a JWT
        val now = Instant.now().epochSecond
        val payload = JwtPayload(
            sub = entry.dn,
            email = loginRequest.email,
            exp = now + 3600
        )

        val token = JwtUtil.generateToken(payload)

        return ResponseEntity.ok(
            LoginResponse(
                token = token
            )
        )
    }
}