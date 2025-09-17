package com.backend.backend.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "users")
data class UserModel(@Id val id: String?, val name: String, val avatarPath: String)