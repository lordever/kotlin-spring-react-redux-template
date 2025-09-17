package com.backend.backend.controller

import com.backend.backend.model.CategoryCardsModel
import com.backend.backend.model.CategoryCardsResponse
import com.backend.backend.model.UserModel
import com.backend.backend.repository.CategoryCardsRepository
import com.backend.backend.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Mono

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
class CategoryCardsController(
    private val categoryCardsRepository: CategoryCardsRepository,
    private val userRepository: UserRepository
) {

    @GetMapping("/{userId}")
    fun getUser(@PathVariable userId: String): Mono<UserModel> = userRepository.findById(userId)

    @GetMapping("/{userId}/category-cards")
    fun getCategoryCards(@PathVariable userId: String): Mono<CategoryCardsResponse> =
        categoryCardsRepository.findById(userId)
            .switchIfEmpty(Mono.error(NoSuchElementException("User not found")))
            .map { doc -> CategoryCardsResponse(doc.daily, doc.weekly, doc.monthly) }

    @PostMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun upsertUser(
        @PathVariable userId: String,
        @RequestBody body: UserModel
    ): Mono<Void> =
        userRepository.save(
            UserModel(
                id = userId,
                name = body.name,
                avatarPath = body.avatarPath
            )
        ).then()

    @PostMapping("/{userId}/category-cards")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun upsertCategoryCards(
        @PathVariable userId: String,
        @RequestBody body: CategoryCardsResponse
    ): Mono<Void> =
        categoryCardsRepository.save(
            CategoryCardsModel(
                userId = userId,
                daily = body.daily,
                weekly = body.weekly,
                monthly = body.monthly
            )
        ).then()
}


