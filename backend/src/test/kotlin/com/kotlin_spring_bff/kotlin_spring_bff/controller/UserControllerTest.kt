package com.kotlin_spring_bff.kotlin_spring_bff.controller

import com.kotlin_spring_bff.kotlin_spring_bff.controllers.user.UserController
import com.kotlin_spring_bff.kotlin_spring_bff.mappers.UserMapper
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import com.kotlin_spring_bff.kotlin_spring_bff.repositories.UserRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import java.util.*

@SpringBootTest
class UserControllerTest {
    @Autowired
    private lateinit var userController: UserController

    @Autowired
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var userMapper: UserMapper

    @Test
    fun testListUsers() {
        val listUsers: List<UserDTO> = userController.getUsers()
        assertThat(listUsers.size).isEqualTo(1)
    }

    @Test
    fun testCreateUser() {
        val userDTO = UserDTO(
            firstName = "Sarah",
            lastName = "Connor",
            email = "sarah_connor@mail.com"
        )

        val responseEntity: ResponseEntity<UserDTO> = userController.createUser(userDTO)
        assertThat(responseEntity.statusCode).isEqualTo(HttpStatus.CREATED)
        assertThat(responseEntity.body).isNotNull
        assertThat(responseEntity.headers.get("Location")).isNotNull

        val locationUUID: List<String>? = responseEntity.headers.location?.path?.split("/")
        val uuid: UUID = UUID.fromString(locationUUID!![4])

        val user: UserDTO = userController.getUserById(uuid)
        assertThat(user).isNotNull
        assertThat(user.firstName).isEqualTo(userDTO.firstName)
    }
}