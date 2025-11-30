package com.kotlin_spring_bff.kotlin_spring_bff.utils

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.kotlin_spring_bff.kotlin_spring_bff.models.JwtHeader
import com.kotlin_spring_bff.kotlin_spring_bff.models.JwtPayload
import com.kotlin_spring_bff.kotlin_spring_bff.models.JwtVerificationResult
import java.util.Base64
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

object JwtUtil {

    private const val SECRET = "super-secret-key-change-me"
    private val mapper = jacksonObjectMapper()

    private fun base64UrlEncode(bytes: ByteArray): String =
        Base64.getUrlEncoder().withoutPadding().encodeToString(bytes)

    private fun base64UrlDecode(str: String): ByteArray =
        Base64.getUrlDecoder().decode(str)


    // HMAC-SHA256
    private fun hmacSha256(data: String, secret: String): ByteArray {
        val mac = Mac.getInstance("HmacSHA256")
        val keySpec = SecretKeySpec(secret.toByteArray(Charsets.UTF_8), "HmacSHA256")
        mac.init(keySpec)
        return mac.doFinal(data.toByteArray(Charsets.UTF_8))
    }

    fun generateToken(payload: JwtPayload): String {
        val header = JwtHeader()

        val headerJson = mapper.writeValueAsString(header)
        val payloadJson = mapper.writeValueAsString(payload)

        val encodedHeader =
            Base64.getEncoder().encodeToString(headerJson.toByteArray(Charsets.UTF_8))
        val encodedPayload =
            Base64.getEncoder().encodeToString(payloadJson.toByteArray(Charsets.UTF_8))

        val unsignedToken = "${encodedHeader}.${encodedPayload}"

        val signatureBytes = hmacSha256(unsignedToken, SECRET)
        val encodedSignature = base64UrlEncode(signatureBytes)

        return "$unsignedToken.$encodedSignature"
    }

    fun verifyToken(token: String): JwtVerificationResult {
        val parts = token.split(".")
        if (parts.size != 3) {
            return JwtVerificationResult(valid = false, reason = "Invalid token format")
        }

        val (encodedHeader, encodedPayload, signature) = parts
        val unsignedToken = "${encodedHeader}.${encodedPayload}"

        val expectedSignature = base64UrlEncode(hmacSha256(unsignedToken, SECRET))
        if (signature != expectedSignature) {
            return JwtVerificationResult(valid = false, reason = "Invalid signature")
        }

        return try {
            val payloadJson = base64UrlDecode(encodedPayload).toString(Charsets.UTF_8)
            val payload = mapper.readValue(payloadJson, JwtPayload::class.java)

            val now = System.currentTimeMillis() / 1000
            if (payload.exp < now) {
                JwtVerificationResult(valid = false, reason = "Token expired")
            } else {
                JwtVerificationResult(valid = true, payload)
            }

        } catch (_: Exception) {
            JwtVerificationResult(false, reason = "Invalid payload")
        }
    }
}