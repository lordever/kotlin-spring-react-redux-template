package com.kotlin_spring_bff.kotlin_spring_bff.services.user

import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import java.util.UUID

interface UserService {
    fun findAll(): List<UserDTO>
    fun findById(id: UUID): UserDTO?
    fun create(newUser: UserDTO): UserDTO
}