package com.backend.backend.repository

import com.backend.backend.model.CategoryCardsModel
import org.springframework.data.repository.reactive.ReactiveCrudRepository

interface CategoryCardsRepository : ReactiveCrudRepository<CategoryCardsModel, String>


