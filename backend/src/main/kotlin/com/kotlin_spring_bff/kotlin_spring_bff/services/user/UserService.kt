package com.kotlin_spring_bff.kotlin_spring_bff.services.user

import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO

interface UserService {
    fun findAll(): List<UserDTO>
    fun create(newUser: UserDTO): UserDTO
}