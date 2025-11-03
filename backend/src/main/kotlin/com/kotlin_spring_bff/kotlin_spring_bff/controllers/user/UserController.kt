package com.kotlin_spring_bff.kotlin_spring_bff.controllers.user

import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import com.kotlin_spring_bff.kotlin_spring_bff.services.user.UserService
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(
    private val userService: UserService
) {
    private val logger = KotlinLogging.logger {}

    companion object {
        const val PATH = "/api/v1/users"
    }

    @GetMapping(PATH)
    fun getUsers(): List<UserDTO> {
        val users: List<UserDTO> = userService.findAll()
        logger.info { "${users.size} users found" }
        return users
    }

    @PostMapping(PATH)
    fun createUser(@RequestBody userDTO: UserDTO): UserDTO {
        logger.info { "Creating user: email=${userDTO.email}, firstName=${userDTO.firstName}" }
        val newUser = userService.create(userDTO)
        logger.info { "${newUser.id} created" }

        return newUser
    }
}