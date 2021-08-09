package com.fitnessapp.fitt.meals.breakfast;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BreakfastRepository extends JpaRepository<Breakfast, Long> {
}
