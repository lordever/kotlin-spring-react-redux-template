package com.kotlin_spring_bff.kotlin_spring_bff.models

import java.util.*

data class Product(
    val id: UUID,
    val name: String,
    val price: Double,
)
