package com.frimmy.application;

import com.frimmy.domain.Ingredient;
import com.frimmy.infrastructure.IngredientRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public List<Ingredient> findByCategory(String category) {
        return ingredientRepository.findByCategory(category);
    }

    public List<Ingredient> findExpiringSoon(int days) {
        LocalDate threshold = LocalDate.now().plusDays(days);
        return ingredientRepository.findByExpirationDateBefore(threshold);
    }

    public Ingredient save(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public Ingredient update(Long id, Ingredient updated) {
        Ingredient existing = findById(id);
        existing.setName(updated.getName());
        existing.setCategory(updated.getCategory());
        existing.setQuantity(updated.getQuantity());
        existing.setUnit(updated.getUnit());
        existing.setExpirationDate(updated.getExpirationDate());
        return ingredientRepository.save(existing);
    }

    public void delete(Long id) {
        ingredientRepository.deleteById(id);
    }
}
