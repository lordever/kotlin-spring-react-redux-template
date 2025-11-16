package com.backend.backend.mappers

import com.backend.backend.dto.BookDto
import com.backend.backend.entities.BookEntity
import org.mapstruct.Mapper

@Mapper(componentModel = "spring")
interface BookMapper {
    fun toEntity(dto: BookDto): BookEntity
    fun toDto(entity: BookEntity): BookDto
    fun toListDTO(entities: List<BookEntity>): List<BookDto>
}