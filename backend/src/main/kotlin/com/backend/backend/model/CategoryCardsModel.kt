package com.backend.backend.model

import com.fasterxml.jackson.annotation.JsonValue
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

enum class CategoryType(@get:JsonValue val value: String) {
    WORK("work"),
    PLAY("play"),
    STUDY("study"),
    EXERCISE("exercise"),
    SOCIAL("social"),
    SELF_CARE("self_care")
}

data class CategoryCardDto(
    val type: CategoryType,
    val spentTime: String,
    val previousSpentTime: String
)

@Document(collection = "category_cards")
data class CategoryCardsModel(
    @Id
    val userId: String,
    val daily: List<CategoryCardDto>,
    val weekly: List<CategoryCardDto>,
    val monthly: List<CategoryCardDto>
)



