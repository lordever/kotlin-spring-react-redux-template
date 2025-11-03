package com.kotlin_spring_bff.kotlin_spring_bff.repositories

import com.kotlin_spring_bff.kotlin_spring_bff.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface UserRepository : JpaRepository<User, UUID>