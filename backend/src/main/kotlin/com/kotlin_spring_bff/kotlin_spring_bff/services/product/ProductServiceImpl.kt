package com.kotlin_spring_bff.kotlin_spring_bff.services.product

import com.kotlin_spring_bff.kotlin_spring_bff.models.Product
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ProductServiceImpl : ProductService {
    val entities = listOf(
        Product(
            id = UUID.fromString("d23da7a2-4305-4902-b09a-cb263d8d36d1"),
            name = "Iphone 11",
            price = 700.99,
        ),
        Product(
            id = UUID.fromString("17181864-8799-4486-9757-c30e2173cf21"),
            name = "Samsung Galaxy S23",
            price = 478.99,
        ),
        Product(
            id = UUID.fromString("2eb3b299-5279-41e0-9945-df71d15a1872"),
            name = "Google Pixel X",
            price = 899.10,
        )
    )

    override fun listAll(): List<Product> = entities
}