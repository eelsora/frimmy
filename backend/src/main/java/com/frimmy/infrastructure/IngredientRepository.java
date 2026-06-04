package com.frimmy.infrastructure;

import com.frimmy.domain.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    Optional<Ingredient> findByCode(String code);

    List<Ingredient> findByCategory(String category);
}
