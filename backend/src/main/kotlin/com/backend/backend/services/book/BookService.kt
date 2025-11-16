package com.backend.backend.services.book

import com.backend.backend.dto.BookDto

interface BookService {
    fun findAll(): List<BookDto>
    fun findById(id: Long): BookDto
    fun save(bookDto: BookDto): BookDto
    fun deleteById(id: Long)
}