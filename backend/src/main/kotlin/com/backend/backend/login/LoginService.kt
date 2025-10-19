    package com.backend.backend.login

    import com.backend.backend.jwt.JwtService
    import com.backend.backend.user.UserRepository
    import org.springframework.security.crypto.password.PasswordEncoder
    import org.springframework.stereotype.Service
    import reactor.core.publisher.Mono

    sealed class LoginOutcome {
        data class Success(val data: LoginSuccessResponse) : LoginOutcome()
        data class Failure(val error: LoginErrorResponse) : LoginOutcome()
    }

    @Service
    class LoginService(
        val userRepository: UserRepository,
        val passwordEncoder: PasswordEncoder,
        val jwtService: JwtService
    ) {
        fun login(loginRequest: LoginRequest): Mono<LoginOutcome> {
            return userRepository.findByUsername(loginRequest.username)
                .flatMap { user ->
                    val ok = user.passwordHash?.let {
                        passwordEncoder.matches(loginRequest.password, it)
                    } == true

                    if (!ok) {
                        Mono.just(LoginOutcome.Failure(LoginErrorResponse(LoginStatus.INVALID_CREDENTIALS)))
                    } else {
                        val userId = requireNotNull(user.id) { "User id must not be null" }
                        val token = jwtService.generateIdToken(
                            subject = userId.toString(),
                            username = user.username ?: user.email ?: "user",
                            email = user.email
                        )
                        Mono.just(LoginOutcome.Success(LoginSuccessResponse(idToken = token)))
                    }
                }
                .switchIfEmpty(
                    Mono.just(LoginOutcome.Failure(LoginErrorResponse(LoginStatus.INVALID_CREDENTIALS)))
                )
                .onErrorResume {
                    Mono.just(LoginOutcome.Failure(LoginErrorResponse(LoginStatus.SERVER_ERROR)))
                }
        }
    }