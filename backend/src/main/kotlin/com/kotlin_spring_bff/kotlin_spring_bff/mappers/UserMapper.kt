package com.kotlin_spring_bff.kotlin_spring_bff.mappers

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import org.mapstruct.Mapper
import org.mapstruct.factory.Mappers

@Mapper(componentModel = "spring")
interface UserMapper {

    fun toUser(user: UserDTO): User
    fun toDto(user: User): UserDTO

    companion object {
        val INSTANCE: UserMapper = Mappers.getMapper(UserMapper::class.java)
    }
}