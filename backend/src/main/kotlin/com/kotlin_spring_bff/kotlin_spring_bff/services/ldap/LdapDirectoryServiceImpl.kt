package com.kotlin_spring_bff.kotlin_spring_bff.services.ldap

import com.kotlin_spring_bff.kotlin_spring_bff.models.BindResponse
import com.kotlin_spring_bff.kotlin_spring_bff.models.LdapEntry
import org.springframework.stereotype.Service

@Service
class LdapDirectoryServiceImpl : LdapDirectoryService {

    private val entries = listOf(
        LdapEntry(
            dn = "uid=john,ou=people,dc=example,dc=com",
            username = "john",
            password = "password",
            attributes = mapOf(
                "cn" to "John Doe",
                "mail" to "john@example.com"
            ),
        ),
        LdapEntry(
            dn = "uid=alice,ou=people,dc=example,dc=com",
            username = "alice",
            password = "qwerty",
            attributes = mapOf(
                "cn" to "Alice Smith",
                "mail" to "alice@example.com"
            ),
        )
    )

    override fun bind(
        dn: String,
        password: String
    ): BindResponse {
        val entry = entries.find { it.dn == dn }
            ?: return BindResponse(false, "Entry not found")

        return if (entry.password == password) {
            BindResponse(true, "Bind Success")
        } else {
            BindResponse(false, "Invalid Credentials")
        }
    }

    override fun bindByEmail(email: String): LdapEntry? =
        entries.find { it.attributes["mail"] == email }

    override fun listAll(): List<LdapEntry> = entries
}