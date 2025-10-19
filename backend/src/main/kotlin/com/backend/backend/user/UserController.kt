package com.backend.backend.user

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux

@RestController
class UserController(val userRepository: UserRepository) {
    companion object {
        const val PATH = "/api/v1/users"
    }

    @GetMapping(PATH)
    fun findAll(): Flux<User> = userRepository.findAll()
}