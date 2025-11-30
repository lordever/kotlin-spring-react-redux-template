package com.kotlin_spring_bff.kotlin_spring_bff.services.ldap

import com.kotlin_spring_bff.kotlin_spring_bff.models.BindResponse
import com.kotlin_spring_bff.kotlin_spring_bff.models.LdapEntry

interface LdapDirectoryService {
    fun bind(dn: String, password: String): BindResponse
    fun bindByEmail(email: String): LdapEntry?
    fun listAll(): List<LdapEntry>
}