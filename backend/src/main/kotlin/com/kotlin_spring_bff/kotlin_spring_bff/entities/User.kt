package com.kotlin_spring_bff.kotlin_spring_bff.entities

import jakarta.persistence.*
import jakarta.validation.constraints.NotNull
import org.hibernate.annotations.UuidGenerator
import java.util.*

@Entity
@Table(name = "users")
data class User(
    @field:Id
    @field:GeneratedValue
    @UuidGenerator
    @Column(name = "id", columnDefinition = "CHAR(36)", updatable = false, nullable = false)
    var id: UUID? = null,

    @field:NotNull
    var firstName: String? = null,

    @field:NotNull
    var lastName: String? = null,

    @field:NotNull
    var email: String? = null,
)
