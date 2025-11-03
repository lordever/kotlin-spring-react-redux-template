package com.kotlin_spring_bff.kotlin_spring_bff.repository

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User
import com.kotlin_spring_bff.kotlin_spring_bff.repositories.UserRepository
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest

import org.assertj.core.api.Assertions.assertThat

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    lateinit var repository: UserRepository

    @Test
    fun testSaveUser() {
        val user = User(
            firstName = "test",
            lastName = "user",
            email = "test_user@mail.com"
        )

        val savedUser = repository.save(user)

        assertThat(savedUser).isNotNull()
        assertThat(savedUser.id).isNotNull()
        assertThat(savedUser.firstName).isEqualTo(user.firstName)
        assertThat(savedUser.lastName).isEqualTo(user.lastName)
        assertThat(savedUser.email).isEqualTo(user.email)
    }

}