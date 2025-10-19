package com.backend.backend.login

import com.fasterxml.jackson.annotation.JsonProperty

enum class LoginStatus(val message: String) {
    INVALID_CREDENTIALS("Invalid username or password."),
    USER_NOT_FOUND("User not found"),
    SERVER_ERROR("Internal server error")
}

data class LoginSuccessResponse(
    @JsonProperty("id_token")
    val idToken: String? = null,
)

data class LoginErrorResponse(
    val status: LoginStatus
) {
    val message: String = status.message
}
