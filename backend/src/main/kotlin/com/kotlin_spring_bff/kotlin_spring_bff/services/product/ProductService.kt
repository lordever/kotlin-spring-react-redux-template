package com.kotlin_spring_bff.kotlin_spring_bff.services.product

import com.kotlin_spring_bff.kotlin_spring_bff.models.Product

interface ProductService {
    fun listAll(): List<Product>
}