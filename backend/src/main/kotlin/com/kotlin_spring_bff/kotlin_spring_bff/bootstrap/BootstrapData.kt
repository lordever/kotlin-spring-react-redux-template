package com.kotlin_spring_bff.kotlin_spring_bff.bootstrap

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User
import com.kotlin_spring_bff.kotlin_spring_bff.repositories.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import java.util.UUID

@Component
class BootstrapData(
    private val userRepository: UserRepository
) : CommandLineRunner {
    override fun run(vararg args: String?) {
        loadUsers()
    }

    fun loadUsers() {
        if (userRepository.count() == 0L) {
            val user = User(
                id = UUID.randomUUID(),
                firstName = "John",
                lastName = "Doe",
                email = "test_user@mail.com",
            )

            userRepository.save(user)
        }
    }
}