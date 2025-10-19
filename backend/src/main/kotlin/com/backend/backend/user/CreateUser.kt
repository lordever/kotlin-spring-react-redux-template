package com.backend.backend.user

data class CreateUser(
    val username: String,
    val email: String,
    @field:jakarta.validation.constraints.Size(min = 8)
    @com.fasterxml.jackson.annotation.JsonProperty(access = com.fasterxml.jackson.annotation.JsonProperty.Access.WRITE_ONLY)
    val password: String
)
