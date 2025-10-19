package com.backend.backend.user

import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.relational.core.mapping.Table
import java.time.LocalDateTime

@Table("users")
data class User(
    @Id
    val id: Long? = null,
    val username: String? = null,
    val email: String? = null,

    @get:JsonIgnore
    val passwordHash: String? = null,

    @CreatedDate
    var createdDate: LocalDateTime? = null,

    @LastModifiedDate
    var lastModifiedDate: LocalDateTime? = null,
)
