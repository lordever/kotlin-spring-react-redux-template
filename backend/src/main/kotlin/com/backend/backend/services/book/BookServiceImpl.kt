package com.backend.backend.services.book

import com.backend.backend.dto.BookDto
import com.backend.backend.entities.BookEntity
import com.backend.backend.mappers.BookMapper
import com.backend.backend.repositories.BookRepository
import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import java.util.Optional

@Service
@Transactional
class BookServiceImpl(
    val bookRepository: BookRepository,
    val bookMapper: BookMapper
) : BookService {
    override fun findAll(): List<BookDto> =
        bookMapper.toListDTO(bookRepository.findAll().toList())

    override fun findById(id: Long): BookDto =
        Optional.of(getById(id))
            .map(bookMapper::toDto)
            .get()

    @Transactional
    override fun save(bookDto: BookDto): BookDto =
        bookMapper.toDto(
            bookRepository.save(
                bookMapper.toEntity(bookDto)
            )
        )

    @Transactional
    override fun deleteById(id: Long) {
        val book = getById(id)
        bookRepository.delete(book)
    }

    private fun getById(id: Long): BookEntity =
        bookRepository
            .findById(id)
            .orElseThrow { RuntimeException("Book with id=${id} not found") }
}