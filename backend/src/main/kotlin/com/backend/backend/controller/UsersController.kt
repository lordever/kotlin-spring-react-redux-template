package com.backend.backend.controller

import com.backend.backend.model.UserModel
import com.backend.backend.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
class UsersController(
    private val userRepository: UserRepository
) {

    @GetMapping("/{userId}")
    fun getUser(@PathVariable userId: String): Mono<UserModel> = userRepository.findById(userId)

    @PostMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun upsertUser(
        @PathVariable userId: String,
        @RequestBody body: UserModel
    ): Mono<Void> =
        userRepository.save(
            UserModel(
                id = userId,
                name = body.name,
                avatarPath = body.avatarPath
            )
        ).then()
}


