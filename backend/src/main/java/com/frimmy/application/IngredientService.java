package com.frimmy.application;

import com.frimmy.domain.Ingredient;
import com.frimmy.infrastructure.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Ingredient> findAll() {
        return ingredientRepository.findAll();
    }

    public Ingredient findById(Long id) {
        return ingredientRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("재료를 찾을 수 없습니다: id=" + id));
    }

    public Ingredient findByCode(String code) {
        return ingredientRepository.findByCode(code)
                .orElseThrow(() -> new IllegalArgumentException("재료를 찾을 수 없습니다: code=" + code));
    }

    public List<Ingredient> findByCategory(String category) {
        return ingredientRepository.findByCategory(category);
    }

    public Ingredient save(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public Ingredient update(Long id, Ingredient updated) {
        Ingredient existing = findById(id);
        existing.setCode(updated.getCode());
        existing.setName(updated.getName());
        existing.setCategory(updated.getCategory());
        return ingredientRepository.save(existing);
    }

    public void delete(Long id) {
        ingredientRepository.deleteById(id);
    }
}
