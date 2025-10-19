package com.backend.backend.user

import java.time.LocalDateTime

data class UserResponse(
    val id: Long?,
    val username: String?,
    val email: String?,
    val createdDate: LocalDateTime?,
    val lastModifiedDate: LocalDateTime?
)
