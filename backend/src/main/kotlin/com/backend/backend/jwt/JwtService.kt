package com.backend.backend.jwt

import com.nimbusds.jose.*
import com.nimbusds.jose.crypto.MACSigner
import com.nimbusds.jwt.JWTClaimsSet
import com.nimbusds.jwt.SignedJWT
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.time.Instant
import java.util.*

@Component
class JwtService(
    @Value("\${security.jwt.issuer:http://localhost}") private val issuer: String,
    @Value("\${security.jwt.audience:backend}") private val audience: String,
    @Value("\${security.jwt.signing-key}") private val signingKey: String,
    @Value("\${security.jwt.id-token-ttl-seconds:900}") private val idTokenTtlSec: Long
) {
    fun generateIdToken(
        subject: String,
        username: String,
        email: String?
    ): String {
        val now = Instant.now()
        val exp = now.plusSeconds(idTokenTtlSec)

        val claims = JWTClaimsSet.Builder()
            .issuer(issuer)
            .audience(audience)
            .subject(subject)
            .issueTime(Date.from(now))
            .expirationTime(Date.from(exp))
            .claim("preferred_username", username)
            .apply { if (email != null) claim("email", email) }
            .build()

        val header = JWSHeader.Builder(JWSAlgorithm.HS256)
            .type(JOSEObjectType.JWT)
            .build()

        val signed = SignedJWT(header, claims)
        signed.sign(MACSigner(signingKey.toByteArray()))

        return signed.serialize()
    }
}
