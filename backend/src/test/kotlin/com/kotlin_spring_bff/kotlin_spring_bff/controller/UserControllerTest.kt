package com.kotlin_spring_bff.kotlin_spring_bff.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.kotlin_spring_bff.kotlin_spring_bff.models.UserDTO
import org.hamcrest.CoreMatchers.equalTo
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {
    @Autowired
    private lateinit var mockMvc: MockMvc

    @Autowired
    private lateinit var objectMapper: ObjectMapper

    @Test
    fun testListUsersWithoutAuth() {
        mockMvc.perform(get("/api/v1/users"))
            .andExpect(status().isUnauthorized)
    }

    @Test
    fun testListUsersWithAuth() {
        mockMvc.perform(
            get("/api/v1/users")
                .with(httpBasic("user", "password"))
        )
            .andExpect(status().isOk)
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
    }

    @Test
    fun testCreateUser() {
        val userDTO = UserDTO(
            firstName = "Sarah",
            lastName = "Connor",
            email = "sarah_connor@mail.com"
        )


        val result = mockMvc.perform(
            post("/api/v1/users")
                .with(httpBasic("user", "password"))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDTO))
        )
            .andExpect { status().isCreated }
            .andExpect { header().exists(HttpHeaders.LOCATION) }
            .andReturn()

        val locationHeader = result.response.getHeader(HttpHeaders.LOCATION)
        val locationUUID = locationHeader?.substringAfterLast("/")

        mockMvc.perform(
            get("/api/v1/users/$locationUUID")
                .with(httpBasic("user", "password"))
        )
            .andExpect { status().isOk }
            .andExpect { content().contentType(MediaType.APPLICATION_JSON) }
            .andExpect(jsonPath("$.firstName", equalTo(userDTO.firstName)))
            .andExpect(jsonPath("$.lastName", equalTo(userDTO.lastName)))
            .andExpect(jsonPath("$.email", equalTo(userDTO.email)))
    }
}