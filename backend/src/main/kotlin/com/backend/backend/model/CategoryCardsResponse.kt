package com.backend.backend.model

data class CategoryCardsResponse(
    val daily: List<CategoryCardDto>,
    val weekly: List<CategoryCardDto>,
    val monthly: List<CategoryCardDto>
)


