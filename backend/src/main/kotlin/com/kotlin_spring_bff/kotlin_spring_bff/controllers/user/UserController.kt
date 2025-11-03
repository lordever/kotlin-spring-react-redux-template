package com.kotlin_spring_bff.kotlin_spring_bff.controllers.user

import com.kotlin_spring_bff.kotlin_spring_bff.controllers.NotFoundException
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import com.kotlin_spring_bff.kotlin_spring_bff.services.user.UserService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.http.HttpHeaders
import org.springframework.web.bind.annotation.PathVariable
import java.util.UUID

@RestController
class UserController(
    private val userService: UserService
) {
    private val logger = KotlinLogging.logger {}

    companion object {
        const val BASE_PATH = "/api/v1/users"
        const val BASE_PATH_WITH_ID = "${BASE_PATH}/{id}"
    }

    @GetMapping(BASE_PATH)
    fun getUsers(): List<UserDTO> = userService.findAll()

    @GetMapping(BASE_PATH_WITH_ID)
    fun getUserById(@PathVariable id: UUID): UserDTO {
        logger.debug { "Get user by id $id" }
        return userService.findById(id) ?: throw NotFoundException()
    }

    @PostMapping(BASE_PATH)
    fun createUser(@RequestBody userDTO: UserDTO): ResponseEntity<UserDTO> {
        logger.info { "Creating user: email=${userDTO.email}, firstName=${userDTO.firstName}" }
        val newUser = userService.create(userDTO)
        logger.info { "${newUser.id} created" }

        val headers = HttpHeaders()
        headers.add("Location", "${BASE_PATH}/${newUser.id}")

        return ResponseEntity
            .status(HttpStatus.CREATED)
            .headers(headers)
            .body(newUser)
    }
}