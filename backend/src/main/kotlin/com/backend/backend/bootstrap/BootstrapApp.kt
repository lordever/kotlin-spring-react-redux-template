package com.backend.backend.bootstrap

import com.backend.backend.user.CreateUser
import com.backend.backend.user.UserRepository
import com.backend.backend.user.UserService
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class BootstrapApp(val userService: UserService, val userRepository: UserRepository) :
    CommandLineRunner {

    override fun run(vararg args: String?) {
        loadUsers()

        userRepository.count().subscribe { count -> println("Users count: $count") }
    }

    fun loadUsers() {
        userRepository.count().subscribe { count ->
            run {
                if (count == 0L) {
                    val newUser = CreateUser(
                        username = "Alex",
                        email = "alex@mail.com",
                        password = "12345"
                    )

                    userService.createUser(newUser).subscribe()
                }
            }
        }
    }
}