package com.backend.backend.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.reactive.CorsWebFilter
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource

@Configuration
class CorsConfig {

    @Value("\${spring.webflux.cors.allowed-origins:http://localhost:3000,http://127.0.0.1:3000}")
    private lateinit var allowedOrigins: String

    @Value("\${spring.webflux.cors.allowed-methods:GET,POST,PUT,DELETE,OPTIONS}")
    private lateinit var allowedMethods: String

    @Value("\${spring.webflux.cors.allowed-headers:*}")
    private lateinit var allowedHeaders: String

    @Value("\${spring.webflux.cors.exposed-headers:*}")
    private lateinit var exposedHeaders: String

    @Value("\${spring.webflux.cors.allow-credentials:true}")
    private var allowCredentials: Boolean = true

    @Bean
    fun corsWebFilter(): CorsWebFilter {
        val cors = CorsConfiguration().apply {
            allowedOriginPatterns = this@CorsConfig.allowedOrigins.split(',').map { it.trim() }
            allowedMethods = this@CorsConfig.allowedMethods.split(',').map { it.trim() }
            allowedHeaders = this@CorsConfig.allowedHeaders.split(',').map { it.trim() }
            exposedHeaders = this@CorsConfig.exposedHeaders.split(',').map { it.trim() }
            allowCredentials = this@CorsConfig.allowCredentials
        }

        val source = UrlBasedCorsConfigurationSource().apply {
            registerCorsConfiguration("/**", cors)
        }
        return CorsWebFilter(source)
    }
}


