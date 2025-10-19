package com.backend.backend.login

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
class LoginController(val loginService: LoginService) {
    companion object {
        const val PATH = "/api/v1/login"
    }

    @PostMapping(PATH)
    fun login(@RequestBody req: LoginRequest): Mono<ResponseEntity<Any>> =
        loginService.login(req).map { outcome ->
            when (outcome) {
                is LoginOutcome.Success -> ResponseEntity.ok(outcome.data)
                is LoginOutcome.Failure -> {
                    val status = when (outcome.error.status) {
                        LoginStatus.INVALID_CREDENTIALS, LoginStatus.USER_NOT_FOUND -> HttpStatus.UNAUTHORIZED
                        else -> HttpStatus.INTERNAL_SERVER_ERROR
                    }
                    ResponseEntity.status(status).body(outcome.error)
                }
            }
        }
}