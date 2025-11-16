package com.backend.backend.controllers

import com.backend.backend.dto.BookDto
import com.backend.backend.services.book.BookService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.net.URI


@RestController
class BookController(private val bookService: BookService) {
    companion object {
        const val BASE_URL = "/api/books"
        const val BASE_URL_WITH_ID = "/api/books/{id}"
    }

    @GetMapping(BASE_URL)
    fun getAllBooks(): List<BookDto> = bookService.findAll()

    @GetMapping(BASE_URL_WITH_ID)
    fun getById(@PathVariable(value = "id") id: Long): ResponseEntity<BookDto> =
        ResponseEntity.ok().body(bookService.findById(id))

    @PostMapping(BASE_URL)
    fun create(@RequestBody dto: BookDto): ResponseEntity<BookDto> {
        val newBook = bookService.save(dto)
        val location = URI.create("${BASE_URL}/${newBook.id}")
        return ResponseEntity.created(location).body(newBook)
    }

    @DeleteMapping(BASE_URL_WITH_ID)
    fun deleteById(@PathVariable(value = "id") id: Long): ResponseEntity<Void> {
        bookService.deleteById(id)
        return ResponseEntity.ok().build()
    }
}