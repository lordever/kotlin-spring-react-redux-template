package com.kotlin_spring_bff.kotlin_spring_bff.services.user

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User
import com.kotlin_spring_bff.kotlin_spring_bff.mappers.UserMapper
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import com.kotlin_spring_bff.kotlin_spring_bff.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserServiceImpl(
    private val userRepository: UserRepository,
    private val mapper: UserMapper
) : UserService {

    override fun findAll(): List<UserDTO> = userRepository.findAll().map(mapper::toDto)

    override fun create(newUser: UserDTO): UserDTO =
        mapper.toDto(
            userRepository.save<User>(mapper.toUser(newUser))
        )
}