package com.backend.backend.repository

import com.backend.backend.model.UserModel
import org.springframework.data.repository.reactive.ReactiveCrudRepository

interface UserRepository : ReactiveCrudRepository<UserModel, String>