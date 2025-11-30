package com.kotlin_spring_bff.kotlin_spring_bff.models

data class LdapEntry(
    val dn: String,
    val username: String,
    val password: String,
    val attributes: Map<String, String> = emptyMap()
)

