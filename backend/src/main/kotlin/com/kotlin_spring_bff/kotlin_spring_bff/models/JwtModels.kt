package com.kotlin_spring_bff.kotlin_spring_bff.models

data class JwtHeader(
    val alg: String = "HS256",
    val typ: String = "JWT",
)

data class JwtPayload(
    val sub: String,
    val email: String,
    val exp: Long,
)

data class JwtVerificationResult(
    val valid: Boolean,
    val payload: JwtPayload? = null,
    val reason: String? = null,
)