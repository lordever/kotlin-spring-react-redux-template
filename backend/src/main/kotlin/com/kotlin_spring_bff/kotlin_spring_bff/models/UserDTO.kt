package com.kotlin_spring_bff.kotlin_spring_bff.models

import java.util.*

data class UserDTO(
    var id: UUID? = null,
    var firstName: String? = null,
    var lastName: String? = null,
    var email: String? = null,
)
