package com.kotlin_spring_bff.kotlin_spring_bff.models

data class LoginResponse(
    val success: Boolean,
    val message: String,
    val token: String? = null
)
