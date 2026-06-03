package com.frimmy.infrastructure;

import com.frimmy.domain.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    List<Ingredient> findByCategory(String category);

    List<Ingredient> findByExpirationDateBefore(LocalDate date);
}
