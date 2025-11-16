package com.backend.backend.repositories

import com.backend.backend.entities.BookEntity
import org.springframework.data.repository.CrudRepository

interface BookRepository: CrudRepository<BookEntity, Long>