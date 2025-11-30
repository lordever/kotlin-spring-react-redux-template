package com.kotlin_spring_bff.kotlin_spring_bff.controllers.products

import com.kotlin_spring_bff.kotlin_spring_bff.services.product.ProductService
import com.kotlin_spring_bff.kotlin_spring_bff.utils.JwtUtil
import jakarta.servlet.http.HttpServletRequest
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ProductController(
    private val productService: ProductService
) {
    companion object {
        const val BASE_PATH = "/api/v1/products"
    }

    @GetMapping(BASE_PATH)
    fun listProducts(request: HttpServletRequest): ResponseEntity<Any> {
        // 1. Reading Authorization: Bearer <token>
        val authHeader = request.getHeader("Authorization") ?: return ResponseEntity.status(
            HttpStatus.UNAUTHORIZED
        )
            .body(mapOf("error" to "Missing Authorization header"))

        if (!authHeader.startsWith("Bearer ")) {
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(mapOf("error" to "Invalid Authorization header"))
        }

        val token = authHeader.replace("Bearer ", "")

        // 2. Validate token
        val verification = JwtUtil.verifyToken(token)
        if (!verification.valid || verification.payload == null) {
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(mapOf("error" to (verification.reason ?: "Invalid JWT token")))
        }

        // Here, if needed, you can use verification.payload.sub / email / roles.

        // 3. Return the list of products
        val products = productService.listAll()
        return ResponseEntity.ok(products)
    }
}