package com.kotlin_spring_bff.kotlin_spring_bff.models

import java.util.*

data class UserDTO(
    var id: UUID?,
    var firstName: String? = "",
    var lastName: String? = "",
    var email: String? = "",
)
