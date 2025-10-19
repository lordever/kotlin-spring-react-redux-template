package com.backend.backend.user

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class UserService(val userRepository: UserRepository, val passwordEncoder: PasswordEncoder) {
    fun createUser(newUser: CreateUser): Mono<UserResponse> = userRepository.save(
        User(
            username = newUser.username,
            email = newUser.email,
            passwordHash = passwordEncoder.encode(newUser.password),
        )
    ).map { it.toResponse() }
}

private fun User.toResponse() = UserResponse(
    id = id,
    username = username,
    email = email,
    createdDate = createdDate,
    lastModifiedDate = lastModifiedDate
)